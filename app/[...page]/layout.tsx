import { builder } from '@builder.io/sdk';
import getModelUrlPaths from '@/utils/getModelUrlPaths';
import MainLayout from '@/layouts/MainLayout';

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
    return <MainLayout className='bg-slate-900 text-white'>{pageCondensedNav}</MainLayout>
  }

  if (pageFullNavModelUrls.includes(urlPath)) {
    return <MainLayout>{pageFullNav}</MainLayout>
  }

  return <MainLayout>{children}</MainLayout>
}
