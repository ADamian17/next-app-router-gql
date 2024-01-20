import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_WP_GQL_ENDPOINT,
});

export const createApolloClient = () => {
  const cache = new InMemoryCache();

  return new ApolloClient({
    link: httpLink,
    cache,
    connectToDevTools: true,
  });
};
