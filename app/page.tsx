import { gql } from '@apollo/client';
import parse, { HTMLReactParserOptions } from 'html-react-parser';

import { createApolloClient } from "@/libs/apolloClient";
import MainLayout from "@/layouts/MainLayout";

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

  return (
    <MainLayout>
      Main Page
      <section className='max-w-screen-xl mx-auto mt-8'>
        <h1 className='font-medium'>{data?.page?.title}</h1>

        {parse(data?.page?.content, options)}
      </section>
    </MainLayout>
  )
}
