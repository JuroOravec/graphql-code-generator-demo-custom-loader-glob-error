const { parseComponent } = require('vue-template-compiler');
const { parse } = require('graphql')
const glob = require('glob')
const { readFileSync } = require('fs')

const acceptedCustomBlockTypes = ['page-query', 'static-query'];

/**
 * Custom document loader for graphql-codegen.
 * 
 * Given a .vue file that has either a <static-query> or <page-query>
 * blocks, this loader extracts the query definition
 * 
 * See more info on https://www.graphql-code-generator.com/docs/config-reference/documents-field#custom-document-loader
 *
 * Use with file that either have <page-query>
 *
 * ```vue
 * // MyPage.vue
 * ...
 * <page-query>
 * query Journal {
 *   posts: allJournalPost {
 *     edges {
 *       node {
 *         id
 *         path
 *         title
 *         description
 *       }
 *     }
 *   }
 * }
 * </page-query>
 * ...
 * ```
 *
 * Or with file that have <static-query>
 *
 * ```vue
 * // MyComponent.vue
 * ...
 * <static-query>
 * query {
 *  metadata {
 *    siteName
 *  }
 * }
 * </static-query>
 * ...
 * ```
 */
const gridsomeQueryDocumentLoader = (docString, config) => {
  try {
    const fileContent = readFileSync(docString, 'utf-8');
    const sfc = parseComponent(fileContent);
    const gridsomeQueryBlock = sfc.customBlocks.find(
      (block) => acceptedCustomBlockTypes.includes(block.type)
    );
    if (gridsomeQueryBlock) {
      // Parse graphql from the custom block 
      return parse(gridsomeQueryBlock.content);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = gridsomeQueryDocumentLoader;
