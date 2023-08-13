import { ImageBox } from "@/components/image-box"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24">
      <div className="text-center mb-auto">
        <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          Rudraksh - Plant Disease Detection
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Helping Mother Nature with Machine Learning
        </h2>
      </div>
      <div className="mb-auto">
        <ImageBox />
      </div>
    </main>
  )
}
