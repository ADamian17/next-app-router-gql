import {create} from "zustand";

type UsePageCountType = {
  pageCount: number
}

export const usePageCount = create<UsePageCountType>(set => ({
  pageCount: 0,
}))
