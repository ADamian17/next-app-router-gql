import Image from "next/image";
import Link from "next/link";

export default function MainLayout({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <>
      <header className={`bg-slate-500 p-5 flex justify-between items-center ${className}`}>
        <Link href={"/"}>
          <Image
            src={"/favicon_io/android-chrome-192x192.png"}
            width={30}
            height={30}
            alt='icon'
          />
        </Link>

        <ul className="flex gap-4 items-center capitalize">
          <li className="hover:bg-slate-300 p-1">
            <Link href={"/page-one"}>page one</Link>
          </li>

          <li className="hover:bg-slate-300 p-1">
            <Link href={"/page-two"}>page two</Link>
          </li>

          <li className="hover:bg-slate-300 p-1">
            <Link href={"/blogs"}>blogs</Link>
          </li>

          <li className="hover:bg-slate-300 p-1">
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
