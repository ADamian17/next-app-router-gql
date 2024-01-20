"use server";
import { cache } from "react";
import { gql } from "@apollo/client";

import { createApolloClient } from "@/libs/apolloClient";
import { cookies } from "next/headers";

const POSTS_QUERY = gql`
  query PostsQuery($first: Int, $after: String, $last: Int, $before: String) {
    posts(first: $first, after: $after, last: $last, before: $before) {
      pageInfo {
        startCursor
        hasNextPage
        hasPreviousPage
        endCursor
      }
      nodes {
        id
        title
      }
    }
  }
`;

export const getCategory = cache(async () => {
  const cookie = cookies();
  const client = createApolloClient();

  let variables = {
    first: 2,
    after: null,
    last: null,
    before: null,
  };

  if (cookie.get("pageInfo")?.value) {
    variables = JSON.parse(cookie.get("pageInfo")?.value as string);
  }

  const { data } = await client.query({
    query: POSTS_QUERY,
    variables,
  });

  return data;
});
