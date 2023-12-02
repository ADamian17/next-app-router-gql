import { createApolloClient } from "@/libs/apolloClient";
import { gql } from '@apollo/client';

export default async function PageFullNav({ params }: { params: { page: string[] } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
    </main>
  )
}
