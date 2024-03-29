import { Metadata } from "next";
import { builder } from "@builder.io/sdk";

import { RenderBuilderContent } from "@/components/RenderBuilderContent";
import MainLayout from "@/layouts/MainLayout";

interface PageProps {
  params: {
    page: string[];
  };
}

export const metadata: Metadata = {
  title: 'Create Next App - Condensed',
  description: 'Generated by create next app',
}

export default async function CondensedPage({ params }: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
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
    <RenderBuilderContent content={content} model="page" />
  );
}
