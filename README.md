# GraphQL Code Generator Custom Loader Glob Error Demo

Minimal example of glob pattern not working with custom loaders in graphql code generator.

## Setup

When you look around this project, you will find:

- `src/App.vue`
  - A dummy Vue SFC file, this file contains a custom block `<static-query>` which contains GraphQL query. As part of the workflow, we want to extract that query and use it in the graphql codegen.

  **Note:** The use of custom blocks to define GraphQL queries comes from [gridsome](https://gridsome.org/docs/querying-data/)

- `src/graphql.schema.json`
  - The schema we use in graphql codegen.

- `scripts/gridsomeQueryDocumentLoader.js`
  - Custom graphql codegen document loader. The loader:
    1. Reads a given `.vue` file
    2. Looks for `<static-query>` or `<page-query>` blocks
    3. Converts the content of the blocks to a GraphQL document

- `codegen.yml`
  - The naive implementation. This one **fails** to extract the queries from `<static-query>`

- `codegen.workaround.yml`
  - The naive implementation. This one **fails** to extract the queries from `<static-query>`

## Steps to reproduce

1. Install dependencies

    ```
    npm ci
    ```

2. Run naive implementation (uses `codegen.yml`)

    This FAILS to generate `src/__generated__/graphql.ts`.

    ```
    npm run gql:gen
    ```

3. Run the workaround implementation (uses `codegen.workaround.yml`)

    This GENERATES `src/__generated__/graphql.ts`

    ```
    npm run gql:gen:workaround
    ```

## Explanation

### Naive implementation

The naive implementation fails because the loader is given the glob pattern (`src/**/*.vue`), instead of paths to concrete files. This leads to two options, both of which lead to failure:

  1. The loader interprets the glob as a regular path to a single file. The loader will fail to read the file as no such file exists.

  2. The loader interprets the glob as a glob pattern. We find a list of files matching the pattern. The loader returns an array of processed GraphQL documents. **However**, codegen throws error because we return an array from the custom loader.

### Workaround implementation

In the workaround implementation, we first call `scripts/populateConfig.js`.

In a nutshell, the script expands the glob patterns inside the codegen config file, so from this:

```yml
# codegen.workaround.yml
documents:
  - src/**/*.vue:
      loader: ./scripts/gridsomeQueryDocumentLoader.js
```

we get this

```yml
# codegen.workaround.yml
documents:
  - src/**/*.vue:
      loader: ./scripts/gridsomeQueryDocumentLoader.js
  - src/App.vue:
      loader: ./scripts/gridsomeQueryDocumentLoader.js
  - src/some/other/VueFile.vue:
      loader: ./scripts/gridsomeQueryDocumentLoader.js
```

Hence, if we now call `graphql-codegen`, we will get the desired output, because:
  1. The custom loader still receives `src/**/*.vue` and still fails on that one.

  2. But now, the loader will also run for the other auto-populated documents (e.g. `src/App.Vue` and `src/some/other/VueFile.vue`). These will load just fine.
