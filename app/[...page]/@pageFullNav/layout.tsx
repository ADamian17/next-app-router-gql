import type { Metadata } from 'next'

import PageFullNavHeader from '@/components/Headers/PageFullNavHeader';
import PrimaryFooter from '@/components/PrimaryFooter';
import { builder } from '@builder.io/sdk';
import Link from 'next/link';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { page: string[] }
}) {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href={"/"}>home</Link>
          </li>
          <li>
            <Link href={"/blog"}>blog</Link>
          </li>
          <li>
            <Link href={"/page-one"}>page-one</Link>
          </li>
          <li>
            <Link href={"/page-two"}>page-two</Link>
          </li>
          <li>
            <Link href={"/blogs"}>blogs</Link>
          </li>
          <li>
            <Link href={"/contact"}>contact</Link>
          </li>
        </ul>
      </header>

      {children}
    </>
  )
}
