import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

/* https://the-guild.dev/graphql/codegen/docs/getting-started */

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: process.env.NEXT_PUBLIC_WP_GQL_ENDPOINT,
  documents: "**/!(*.d).{ts,tsx}",
  generates: {
    "types/wp-marketing.d.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;