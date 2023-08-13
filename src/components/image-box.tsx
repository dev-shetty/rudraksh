// Component for dragging and dropping images which will be sent to ML Model for detection

export function ImageBox() {
  return (
    <section>
      <form encType="multipart/form-data" method="post">
        <div className="flex flex-col items-center">
          <label htmlFor="plant-image">
            Choose the Plant Image to be detected
            <div className="w-72 mt-4 flex items-center justify-center aspect-square mx-auto border-2 dark:border-white border-black border-dashed ">
              <p>Drag and Drop the Image Here</p>

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
