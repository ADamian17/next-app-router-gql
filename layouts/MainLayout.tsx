import Link from "next/link";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <ul className="flex gap-2">
          <li>
            <Link href={"/"}>home</Link>
          </li>
          <li>
            <Link href={"/page-one"}>page-one</Link>
          </li>
          <li>
            <Link href={"/page-two"}>page-two</Link>
          </li>
          <li>
            <Link href={"/blogs"}>blogs</Link>
          </li>
          <li>
            <Link href={"/contact"}>contact</Link>
          </li>
        </ul>
      </header>

      <main>
        {children}
      </main>
    </>
  )
}
