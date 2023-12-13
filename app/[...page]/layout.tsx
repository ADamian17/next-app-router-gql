import { builder } from '@builder.io/sdk';
import getModelUrlPaths from '@/utils/getModelUrlPaths';
import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

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
    return (
      <>
        <header className='p-5 bg-black text-white'>
          <Link href={"/"}>
            <Image
              src={"/favicon_io/android-chrome-192x192.png"}
              width={30}
              height={30}
              alt='icon'
            />
          </Link>
        </header>

        {pageCondensedNav}
      </>
    )
  }

  if (pageFullNavModelUrls.includes(urlPath)) {
    return <MainLayout>{pageFullNav}</MainLayout>
  }

  return <MainLayout>{children}</MainLayout>
}
