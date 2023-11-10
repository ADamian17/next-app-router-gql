"use client"

import { ReactNode, useCallback, useEffect, useRef } from "react";

import { useIsStickyNav } from "@/state/useIsStickyNav";

import styles from "./Header.module.css";

const Header = ({ children }: { children: ReactNode }) => {
  const observerRef = useRef(null)
  const setIsSticky = useIsStickyNav(state => state.setIsSticky)
  const isSticky = useIsStickyNav(state => state.isSticky)

  const observerCB = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsSticky(!entry.isIntersecting);
  }, [setIsSticky])

  useEffect(() => {
    const observer = new IntersectionObserver(observerCB, {
      rootMargin: "200px",
      threshold: 0
    })

    if (observerRef.current) observer.observe(observerRef.current)
  }, [observerRef, observerCB]);

  return (
    <>
      <div ref={observerRef} />

      <header className={`${styles.header} ${isSticky && styles.isSticky}`}>
        {children}
      </header>
    </>
  )
}

export default Header;
