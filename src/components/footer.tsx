import Image from "next/image"
import Logo from "@/assets/logo.png"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Footer() {
  return (
    <footer className="bg-accent/50">
      <div className="w-11/12 md:w-2/3 px-4 py-8 mx-auto grid md:grid-cols-3">
        <div className="flex flex-col md:border-r md:border-r-foreground/50 ">
          <div className="flex gap-2 items-center md:justify-start justify-center">
            <Image
              src={Logo}
              alt="Rudraksh Logo"
              width={75}
              quality={100}
              className="-ml-3"
            />
            <p className="text-2xl font-extrabold">Rudraksh</p>
          </div>
          <p className="md:w-2/3 mt-2 text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            dolore?
          </p>
        </div>
        <div className="flex flex-col md:border-r md:border-r-foreground/50 items-center">
          <div className="flex gap-2 items-center">
            <p className="mt-8 md:mt-4 font-bold text-lg">Explore</p>
          </div>
          <ul className="w-2/3 flex flex-col mt-2">
            <Button variant="link" asChild>
              <Link href="/">Introduction</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/home">Home</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/about">About</Link>
            </Button>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <p className="mt-4 font-bold text-lg text-center">
              Contribute to Rudraksh
            </p>
          </div>
          <ul className="w-2/3 flex flex-col mt-2">
            <Button variant="link" asChild>
              <Link
                href="https://github.com/Deveesh-Shetty/rudraksh"
                target="_blank"
                className="flex items-center gap-2"
              >
                <GitHubLogoIcon />
                <p>GitHub</p>
              </Link>
            </Button>
          </ul>
        </div>
      </div>
      <div className="bg-accent/50 text-center py-4">
        <p>&#169; Copyrights - Team Rudra {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
