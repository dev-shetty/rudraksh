// Component for dragging and dropping images which will be sent to ML Model for detection
"use client"
import LeafSVG from "@/components/assets/Leaf"
import { Button } from "@/components/ui/button"
import { ChangeEvent, FormEvent, useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export function ImageBox() {
  // TODO: Add Drag and Drop Functionality
  const [image, setImage] = useState<FileList | null>(null)
  const { toast } = useToast()

  function onImageUpload(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    setImage(e.target.files)
    console.log(e.target.files)
    toast({
      variant: "success",
      title: "Image Uploaded",
      description: `${e.target.files[0].name} Uploaded Successfully`,
    })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // TODO: Check how it works in Next13
    e.preventDefault()
    console.log(e)
  }

  return (
    <section className="mt-8 md:mt-0">
      <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <label htmlFor="plant-image" className="cursor-pointer">
            {/* <p className="text-center">Click to Choose the Plant Image</p> */}
            <div className="w-72 mt-4 flex items-center justify-center aspect-square mx-auto border-2 dark:border-white border-black border-dashed rounded-lg">
              <div className="flex flex-col gap-2 p-4 justify-center items-center">
                <LeafSVG />
                <p className="text-center">Upload Leaf Image Here</p>
              </div>
              <input
                type="file"
                name="plant-image"
                id="plant-image"
                className="hidden"
                accept="image/*"
                onChange={onImageUpload}
                required
              />
            </div>
          </label>
          <div className="mt-4">
            {image === null ? (
              <Button disabled className="select-none">
                Add Image to Proceed
              </Button>
            ) : (
              <div className="flex flex-col justify-center gap-2 items-center">
                <p>{image[0].name} Uploaded!</p>
                <Button type="submit">Detect Disease</Button>
              </div>
            )}
          </div>
        </div>
      </form>
    </section>
  )
}
