import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://gatsby-wp.local/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

export const createApolloClient = () => new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
