import { ThemeToggle } from "@/components/ui/theme-toggle"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="flex absolute w-full backdrop-blur-sm items-center px-4 py-4 justify-between">
      <div className="flex gap-8 items-center">
        <div>
          <p className="scroll-m-20 text-xl font-semibold">
            <Link href="/">Rudraksh</Link>
          </p>
        </div>
        <ul className="flex gap-4">
          {/* TODO: Add Effects */}
          <li className="cursor-pointer hover:underline">
            <Link href="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <ThemeToggle />
    </nav>
  )
}
