import { createApolloClient } from "@/libs/apolloClient";
import { gql } from '@apollo/client';

export default async function Home() {
  const client = createApolloClient();

  const { data } = await client.query({
    query: gql`
      query BlogPage{
        page(id: "/", idType: URI) {
          id
          uri
          title
        }
      }
    `
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{data?.page?.title}</h1>
    </main>
  )
}
