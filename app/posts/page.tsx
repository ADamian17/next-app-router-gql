"use client"
import { gql, useQuery } from '@apollo/client';
import MainLayout from "@/layouts/MainLayout";


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

// Function to update the query with the new results
const updateQuery = (previousResult: any, { fetchMoreResult }: { fetchMoreResult: any }) => {
  return fetchMoreResult.posts.nodes.length ? fetchMoreResult : previousResult;
};

export default function Home() {
  const variables = {
    first: 2,
    after: null,
    last: null,
    before: null
  }
  const { data, error, loading, fetchMore } = useQuery(POSTS_QUERY, { variables })

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  if (loading) {
    return null;
  }

  return (
    <MainLayout>
      <ul>
        {data?.posts?.nodes && data?.posts?.nodes.map((post: any) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>

      <div className='flex gap-5'>
        {data?.posts?.pageInfo?.hasPreviousPage && (
          <button
            className='bg-slate-400 p-2'
            onClick={() => {
              fetchMore({
                variables: {
                  first: null,
                  after: null,
                  last: 2,
                  before: data?.posts.pageInfo.startCursor || null
                },
                updateQuery
              });
            }}
          >
            prev
          </button>
        )
        }

        {data?.posts?.pageInfo?.hasNextPage && (
          <button
            className='bg-slate-500 p-2'
            onClick={() => {
              fetchMore({
                variables: {
                  first: 2,
                  after: data?.posts.pageInfo.endCursor || null,
                  last: null,
                  before: null
                },
                updateQuery
              });
            }}
          >
            next
          </button>
        )
        }
      </div>
    </MainLayout>
  )
}
