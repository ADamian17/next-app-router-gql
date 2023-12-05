import { gql } from "@apollo/client";

import { createApolloClient } from "@/libs/apolloClient";
import { usePageCount } from '@/state/usePageCount';
import Link from "next/link";

export default async function BlogPage() {
  const client = createApolloClient();

  const { data } = await client.query({
    query: gql`
      query BlogPage {
        page(id: "/blog/", idType: URI) {
          id
          uri
          title
        }
      }
    `,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      <h1>{data?.page?.title}</h1>

      {usePageCount.getState().pageCount}
    </main>
  )
}
