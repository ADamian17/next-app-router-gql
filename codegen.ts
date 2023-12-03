import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

/* https://the-guild.dev/graphql/codegen/docs/getting-started */

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  // schema: process.env.NEXT_PUBLIC_WP_GQL_ENDPOINT,
  schema: process.env.NEXT_PUBLIC_BUILDER_GQL_ENDPOINT,
  // documents: "**/!(*.d).{ts,tsx}", this will look our local file and create types form it
  generates: {
    "types/wp-marketing.d.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        dedupeOperationSuffix: true,
        noExport: true,
        skipTypename: true,
        omitOperationSuffix: true,
        // typesPrefix: "Wp",
        avoidOptionals: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};

export default config;