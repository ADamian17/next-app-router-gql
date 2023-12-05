import { createApolloClient } from "@/libs/apolloClient";
import { gql } from '@apollo/client';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
import { usePageCount } from '@/state/usePageCount';
import Link from "next/link";

export default async function Home() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Page{
        page(id: "/", idType: URI) {
          title
          id
          template {
            ... on HomeTemplate {
              templateName
              postRelationship {
                postList {
                  ... on Post {
                    id
                    slug
                  }
                }
              }
            }
          }
          content
        }
      }
    `
  });

  const options: HTMLReactParserOptions = {
    replace(node) {
      return node;
    },
  };
  console.log("home", usePageCount.getState());

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

      {parse(data?.page?.content, options)}
      {usePageCount.getState().pageCount}
    </main>
  )
}
