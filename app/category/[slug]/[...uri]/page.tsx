import MainLayout from "@/layouts/MainLayout";

import { notFound } from "next/navigation";
import PaginationControllers from "@/components/PaginationControllers";
import { getCategory } from "../../category.query";

const Category = async ({ params }: { params: { slug: string, uri: string[] } }) => {
  const data = await getCategory();

  if (!data?.posts?.nodes) notFound()

  const { posts } = data

  return (
    <MainLayout>
      <ul>
        {posts?.nodes && data?.posts?.nodes.map((post: any) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>

      <PaginationControllers
        hasPreviousPage={posts?.pageInfo?.hasPreviousPage}
        hasNextPage={posts?.pageInfo?.hasNextPage}
        startCursor={posts?.pageInfo?.startCursor}
        endCursor={posts?.pageInfo?.endCursor}
        pageCount={Number(params.uri[1])}
        baseUrl={`/category/${params?.slug}`}
      />
    </MainLayout>
  )
}

export default Category
