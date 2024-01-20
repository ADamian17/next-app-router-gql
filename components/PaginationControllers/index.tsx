"use client"

import { setPageInfo } from "@/utils/action";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type PaginationControllersType = {
  baseUrl: string,
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageCount: number,
  startCursor: string;
};

const PaginationControllers: React.FC<PaginationControllersType> = ({
  endCursor,
  hasNextPage,
  hasPreviousPage,
  startCursor,
  pageCount,
  baseUrl
}) => {
  const parentSegment = `${baseUrl}/page/`
  const nextUrl = parentSegment + (pageCount + 1)
  const prevUrl = pageCount > 2 ? parentSegment + (pageCount - 1) : baseUrl
  const postPerPage = 2;

  const handlePrev = () => {
    if (pageCount <= 2) {
      setPageInfo({
        deletePageInfo: true,
      })
      return;
    }

    setPageInfo({
      first: null,
      after: null,
      last: postPerPage,
      before: startCursor
    })
  }

  const handleNext = () => {
    setPageInfo({
      first: postPerPage,
      after: endCursor,
      last: null,
      before: null,
    })
  }

  return (
    <div className='flex gap-5'>
      {hasPreviousPage && (
        <Link href={prevUrl} onClick={handlePrev} className='bg-slate-400 p-2'>
          prev
        </Link>
      )}

      {hasNextPage && (
        <Link href={nextUrl} onClick={handleNext} className='bg-slate-400 p-2'>
          next
        </Link>
      )}
    </div>
  )
};

export default PaginationControllers;
