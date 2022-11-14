import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/cla9ttszs2bp501umbpabh74s/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: [{
        add: {
          content: '/* eslint-disable */'
        }
      }
      ]
    }
  }
};

export default config;
