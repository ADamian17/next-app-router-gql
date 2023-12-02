import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/RenderBuilderContent";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

export default async function PrimaryFooter(props: { params: { urlPath: string[] } }) {
  const content = await builder
    .get("primary-footer", {
      userAttributes: {
        urlPath: "/" + (props?.params?.urlPath?.join("/") || ""),
      },
      prerender: false,
    })
    .toPromise();

  return <RenderBuilderContent content={content} model="primary-footer" />
}