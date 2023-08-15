import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import GreenLeaves from "@/assets/green-leaves.jpg"

export default function Introduction() {
  return (
    <section className="py-4 md:py-0 min-h-screen grid md:grid-cols-2 place-items-center">
      <div className="w-11/12 md:w-1/2 text-center">
        <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl uppercase gradient-text">
          Rudraksh
        </h1>
        <p className="text-center text-sm md:text-base mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          commodi itaque ea temporibus cum reprehenderit aliquid laudantium a in
          odio eveniet recusandae officia culpa quo ducimus necessitatibus id
          eos pariatur?
        </p>
        <Button className="my-7" asChild>
          <Link href="/home">Use Rudraksh</Link>
        </Button>
      </div>
      <div className="relative hidden md:block md:w-full md:h-full">
        <Image
          src={GreenLeaves}
          alt="Green and Healthy Leaves"
          fill
          priority
          quality={100}
          className="hidden md:block"
        />
      </div>
    </section>
  )
}
