import { createApolloClient } from "@/libs/apolloClient";
import { gql } from '@apollo/client';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';

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
      console.log((node as Element));

      return node;
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{data?.page?.title}</h1>

      {parse(data?.page?.content, options)}
    </main>
  )
}
