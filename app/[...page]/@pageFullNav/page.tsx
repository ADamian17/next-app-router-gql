// Example file structure, app/[...page]/page.tsx
// You could alternatively use src/app/[...page]/page.tsx
import { RenderBuilderContent } from "@/components/RenderBuilderContent";
import { builder } from "@builder.io/sdk";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page-full-nav", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model="page-full-nav" />
    </>
  );
}