const glob = require('glob');
const { readFileSync, writeFileSync } = require('fs');
const yaml = require('yaml');

const acceptedCustomBlockTypes = ['<page-query>', '<static-query>'];

const SRC_GLOB_TOKEN = '__GRIDSOME_QUERY_SOURCE_GLOB__';
const OUT_TOKEN = '__GRIDSOME_QUERY_AUTOGEN__';

const tokenPositionType = {
  SCALAR_BEFORE: 'tokenPositionType__SCALAR_BEFORE',
  SCALAR_AFTER: 'tokenPositionType__SCALAR_AFTER',
  MAP_BEFORE: 'tokenPositionType__MAP_BEFORE',
  MAP_AFTER: 'tokenPositionType__MAP_AFTER',
  PARENT_BEFORE: 'tokenPositionType__PARENT_BEFORE',
};

// Check if node has the token inside its comments
// The AST can assign the comment to the node's parent
// if the comment was above (before) the first item in seuqence.
// Hence we need to check both.
const getYamlASTNodeCommentTokenPosition = (nodeItem, token) => {
  const testComment = (comment) => {
    return (comment || '').includes(token);
  };

  // When comment is BEFORE (ABOVE) the plain value
  if (
    yaml.isScalar(nodeItem.node) &&
    testComment(nodeItem.node.commentBefore)
  ) {
    return tokenPositionType.SCALAR_BEFORE;
  }

  // When comment is AFTER the plain value
  if (yaml.isScalar(nodeItem.node) && testComment(nodeItem.node.comment)) {
    return tokenPositionType.SCALAR_AFTER;
  }

  // When comment is BEFORE (ABOVE) the map definition
  if (yaml.isMap(nodeItem.node) && testComment(nodeItem.node.commentBefore)) {
    return tokenPositionType.MAP_BEFORE;
  }

  // When comment is AFTER the map key (the comments get assigned to the value)
  if (
    yaml.isMap(nodeItem.node) &&
    testComment(nodeItem.node.items[0].value.commentBefore)
  ) {
    return tokenPositionType.MAP_AFTER;
  }

  // When comment is BEFORE (ABOVE) FIRST ITEM IN SEQ
  // We need to check parent's 'commentBefore'
  if (nodeItem.index === 0 && testComment(nodeItem.parent.commentBefore)) {
    return tokenPositionType.PARENT_BEFORE;
  }

  return false;
};

/**
 * Given a codegen config AST, look for 'documents' entry
 * and find nodes that contain the source token in their comment.
 */
const extractYamlASTNodesWithGlobPatterns = (topNode) => {
  const itemsToParse = [topNode];
  const foundNodes = [];

  // Traverse the AST, and find nodes that have a source token in the comment
  // Also keep track of current node, its parent, and its index,
  // so we can later insert new nodes into AST at correct place.
  while (itemsToParse.length) {
    const currItem = itemsToParse.shift();

    const tokenPosition = getYamlASTNodeCommentTokenPosition(
      currItem,
      SRC_GLOB_TOKEN,
    );
    // Check if item has the source token
    if (tokenPosition) {
      foundNodes.push({ ...currItem, tokenPosition });
      continue;
    }

    if (yaml.isPair(currItem.node)) {
      itemsToParse.push({
        node: currItem.node.value,
        parent: currItem.node,
        index: null,
      });
      continue;
    }

    if (yaml.isMap(currItem.node) || yaml.isSeq(currItem.node)) {
      const childItems = currItem.node.items.map((node, index) => ({
        node,
        parent: currItem.node,
        index,
      }));
      itemsToParse.push(...childItems);
      continue;
    }
  }

  return foundNodes;
};

// Update the parent's references, effectively
// updating and inserting the new values into the AST.
//
// NOTE: For simplicity, we assume there's only one parent
// and that it's a sequence
const enrichYamlASTNodesWithFiles = (parent, nodes) => {
  parent.items = parent.items.map((oldItem, oldItemIndex) => {
    // Remove (skip) the previously-generated items
    const shouldRemoveItem = getYamlASTNodeCommentTokenPosition(
      {
        node: oldItem,
        parent,
        index: oldItemIndex,
      },
      OUT_TOKEN,
    );
    
    return shouldRemoveItem ? null : oldItem;
  })
  .reduce((agg, oldItem, index) => {
    if (oldItem === null) return agg;

    const { node, tokenPosition } = nodes.find((newItem) => newItem.index === index) || {};

    // Do nothing - keep the old node as is
    if (!node) {
      agg.push(oldItem);
      return agg;
    }

    // Search for the files
    const files = yaml.isScalar(node)
      ? glob.sync(node.value)
      : yaml.isPair(node)
      ? glob.sync(node.key.value)
      : yaml.isMap(node)
      ? glob.sync(node.items[0].key.value)
      : [];

    // Leave if we can't process it
    const cannotBeProcessed =
      !parent || (!yaml.isMap(parent) && !yaml.isSeq(parent));
    if (cannotBeProcessed) return agg;

    const nodesToInsert = files.reduce((fileNodesAgg, file) => {
      // Keep only those files that actually contain the
      // gridsome page or static queries
      const fileContent = readFileSync(file, 'utf-8');
      const containsAcceptedBlockType = acceptedCustomBlockTypes.some((blockType) => fileContent.includes(blockType));
      if (!containsAcceptedBlockType) return fileNodesAgg;

      const newNode = node.clone();

      // Insert updated value to right position
      if (yaml.isScalar(node)) {
        newNode.value = file;
      } else if (yaml.isPair(node)) {
        newNode.key.value = file;
      } else if (yaml.isMap(node)) {
        newNode.items[0].key.value = file;
      } else {
        throw Error('Unknown node type', node);
      }

      // Insert "autogen" token to right position
      if (tokenPosition === tokenPositionType.SCALAR_BEFORE) {
        newNode.commentBefore = OUT_TOKEN;
      } else if (tokenPosition === tokenPositionType.SCALAR_AFTER) {
        newNode.comment = OUT_TOKEN;
      } else if (tokenPosition === tokenPositionType.MAP_BEFORE) {
        newNode.commentBefore = OUT_TOKEN;
      } else if (tokenPosition === tokenPositionType.MAP_AFTER) {
        newNode.items[0].value.commentBefore = OUT_TOKEN;
      }
      // Note: In this case the original item should be at index 0,
      // so the subsequent (generated) items can have the comment
      // in commentBefore
      else if (tokenPosition === tokenPositionType.PARENT_BEFORE) {
        newNode.commentBefore = OUT_TOKEN;
      } else {
        throw Error('Unknown tokenPositionType', tokenPositionType);
      }

      fileNodesAgg.push(newNode);
      return fileNodesAgg;
    }, []);

    // Append generated items after the original
    agg.push([oldItem, ...nodesToInsert]);
    return agg;
  }, [])
  // Spread the inserts
  .reduce((agg, item) => {
    if (Array.isArray(item)) {
      agg.push(...item);
    } else {
      agg.push(item)
    }
    return agg;
  }, []);
};

const populateCodegenConfigDocumentsWithGridsomeQueries = (
  codegenConfigPath,
) => {
  const codegenConfigContent = readFileSync(codegenConfigPath, 'utf-8');
  const codegenConfigYamlAST = yaml.parseDocument(codegenConfigContent);

  // Find the "documents" branch of the config
  // and use it as a starting point for the traversal
  let documentsNode;
  for (const [index, item] of codegenConfigYamlAST.contents.items.entries()) {
    if (item.key.value === 'documents') {
      documentsNode = {
        parent: codegenConfigYamlAST.contents,
        node: item,
        index,
      };
      break;
    }
  }

  const nodes = extractYamlASTNodesWithGlobPatterns(documentsNode);

  enrichYamlASTNodesWithFiles(documentsNode.node.value, nodes);

  const updatedCodegenConfigContent = codegenConfigYamlAST.toString();
  writeFileSync(codegenConfigPath, updatedCodegenConfigContent, 'utf-8');
};

if (require.main === module) {
  populateCodegenConfigDocumentsWithGridsomeQueries('codegen.workaround.yml');
}

module.exports = populateCodegenConfigDocumentsWithGridsomeQueries;
