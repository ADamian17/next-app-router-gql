"use server";
import { cookies } from "next/headers";

type SetPageInfoArgs = {
  first: number | null;
  after: string | null;
  last: number | null;
  before: string | null;
};

export const setPageInfo = async ({
  first,
  after,
  last,
  before,
}: SetPageInfoArgs) => {
  const cookie = cookies();

  cookie.set(
    "pageInfo",
    JSON.stringify({
      first,
      after,
      last,
      before,
    }),
  );
};
