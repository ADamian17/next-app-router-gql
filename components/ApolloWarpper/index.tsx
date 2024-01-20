"use client"
import { createApolloClient } from "@/libs/apolloClient"
import { ApolloProvider } from "@apollo/client"
import { ReactNode } from "react"

const ApolloWrapper = ({ children }: { children: ReactNode }) => {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default ApolloWrapper