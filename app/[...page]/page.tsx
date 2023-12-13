import MainLayout from "@/layouts/MainLayout";
import { createApolloClient } from "@/libs/apolloClient";
import getModelUrlPaths from "@/utils/getModelUrlPaths";
import { gql } from '@apollo/client';
import Link from "next/link";

export default async function PageFullNav({ params }: { params: { page: string[] } }) {
  return (
    <MainLayout>
      Default Page
    </MainLayout>
  )
}
