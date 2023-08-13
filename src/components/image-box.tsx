// Component for dragging and dropping images which will be sent to ML Model for detection
"use client"
import LeafSVG from "@/components/assets/Leaf"

export function ImageBox() {
  // TODO: Add Drag and Drop Functionality

  return (
    <section className="mt-8 md:mt-0">
      <form encType="multipart/form-data" method="post">
        <div className="flex flex-col items-center">
          <label htmlFor="plant-image" className="cursor-pointer">
            <p className="text-center">Click to Choose the Plant Image</p>
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
                required
              />
            </div>
          </label>
        </div>
      </form>
    </section>
  )
}
