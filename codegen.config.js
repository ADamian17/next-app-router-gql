/** @type {import('graphql-config').IGraphQLConfig } */
const { loadEnvConfig } = require("@next/env");

/* https://the-guild.dev/graphql/codegen/docs/getting-started */

const projectDir = process.cwd();
loadEnvConfig(projectDir);

module.exports = {
  projects: {
    builder: {
      overwrite: true,
      ignoreNoDocuments: true,
      schema: process.env.NEXT_PUBLIC_BUILDER_GQL_ENDPOINT,
      extensions: {
        codegen: {
          generates: {
            "types/builder-marketing.d.ts": {
              plugins: ["typescript", "typescript-operations"],
              config: {
                dedupeOperationSuffix: true,
                noExport: true,
                skipTypename: true,
                omitOperationSuffix: true,
                avoidOptionals: true,
              },
            },
          },
          hooks: {
            afterOneFileWrite: ["prettier --write"],
          },
        }
      }
    },
    wp: {
      overwrite: true,
      ignoreNoDocuments: true,
      schema: process.env.NEXT_PUBLIC_WP_GQL_ENDPOINT,
      extensions: {
        codegen: {
          generates: {
            "types/wp-marketing.d.ts": {
              plugins: ["typescript", "typescript-operations"],
              config: {
                dedupeOperationSuffix: true,
                noExport: true,
                skipTypename: true,
                omitOperationSuffix: true,
                avoidOptionals: true,
              },
            },
          },
          hooks: {
            afterOneFileWrite: ["prettier --write"],
          },
        }
      }
    },
  }
}