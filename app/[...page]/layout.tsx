import { builder } from '@builder.io/sdk';
import getModelUrlPaths from '@/utils/getModelUrlPaths';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

export default async function BuilderPagesLayout({
  children,
  params,
  pageCondensedNav,
  pageFullNav,
}: {
  children: React.ReactNode;
  pageCondensedNav: React.ReactNode;
  pageFullNav: React.ReactNode;
  params: { page: string[] }
}) {
  const pageModelUrls = await getModelUrlPaths("page");
  const pageFullNavModelUrls = await getModelUrlPaths("page-full-nav");
  const urlPath = "/" + ((params?.page as string[])?.join("/") || "")

  if (pageModelUrls.includes(urlPath)) {
    return <>{pageCondensedNav}</>
  }

  if (pageFullNavModelUrls.includes(urlPath)) {
    return <>{pageFullNav}</>
  }

  return <>{children}</>
}
