import {create} from "zustand";

type UseIsStickyNavType = {
  isSticky: boolean
  setIsSticky: (isSticky: boolean) => void;
}


export const useIsStickyNav = create<UseIsStickyNavType>(set => ({
  isSticky: false,
  setIsSticky: (isSticky) => set({isSticky})
}))
