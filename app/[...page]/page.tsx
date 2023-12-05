import { createApolloClient } from "@/libs/apolloClient";
import { gql } from '@apollo/client';
import Link from "next/link";

export default async function PageFullNav({ params }: { params: { page: string[] } }) {
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

      hello
    </main>
  )
}
