"use server";
import { cookies } from "next/headers";

type SetPageInfoArgs = Partial<{
  first: number | null;
  after: string | null;
  last: number | null;
  before: string | null;
  deletePageInfo: boolean;
}>;

export const setPageInfo = async ({
  first,
  after,
  last,
  before,
  deletePageInfo,
}: SetPageInfoArgs) => {
  const cookie = cookies();
  const cookieTarget = "pageInfo";

  if (deletePageInfo && cookie.get(cookieTarget)) {
    cookie.delete(cookieTarget);
    return;
  }

  cookie.set(
    cookieTarget,
    JSON.stringify({
      first,
      after,
      last,
      before,
    }),
  );
};
