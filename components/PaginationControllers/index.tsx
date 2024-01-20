"use client"

import { setPageInfo } from "@/utils/action";

type PaginationControllersType = {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
};

const PaginationControllers: React.FC<PaginationControllersType> = ({
  startCursor,
  hasPreviousPage,
  hasNextPage,
  endCursor
}) => {
  const handlePrev = () => {
    setPageInfo({
      first: null,
      after: null,
      last: 2,
      before: startCursor,
    })
  }

  const handleNext = () => {
    setPageInfo({
      first: 2,
      after: endCursor,
      last: null,
      before: null,
    })
  }

  return (
    <div className='flex gap-5'>
      {hasPreviousPage && (
        <button onClick={handlePrev} className='bg-slate-400 p-2'>
          prev
        </button>
      )}

      {hasNextPage && (
        <button onClick={handleNext} className='bg-slate-400 p-2'>
          next
        </button>
      )}
    </div>
  )
};

export default PaginationControllers;
