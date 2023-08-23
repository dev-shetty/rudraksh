import { Prediction } from "@/lib/types"

interface ResultProps {
  data: Prediction
}

export default function Result({ data }: ResultProps) {
  const prediction = data.result
  return (
    <div className="w-screen mt-8">
      {/* If the image is not a plant just show one line */}
      {prediction.is_plant.binary ? (
        <div className="p-8 bg-secondary">
          <p className="text-center text-3xl md:text-4xl">
            Plant is{"  "}
            <span className="font-bold">
              {prediction.is_healthy.binary ? (
                <span className="gradient-text">Healthy</span>
              ) : (
                <span className="text-red-500">Unhealthy</span>
              )}
            </span>
          </p>
          {/* If the plant is healthy display a motivated message :) */}
          {prediction.is_healthy.binary && (
            <p className="text-center mt-4 text-lg">
              Your plant is happy, you are truly a nature lover!
            </p>
          )}
          {/* If the plant is unhealthy then only display the diseases */}
          {!prediction.is_healthy.binary && (
            <div>
              <p className="text-center text-lg md:text-2xl mt-8">
                Potential Diseases
              </p>
              <div className="grid md:grid-cols-2 gap-4 place-items-center">
                {prediction.disease.suggestions.map((disease) => (
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center">
                      <p className="text-2xl font-bold">
                        {disease.name} -{" "}
                        {(disease.probability * 100).toPrecision(7)}%
                      </p>
                    </div>
                    <p className="my-2">Plants with {disease.name}</p>
                    <div className="flex gap-1">
                      {disease.similar_images.map((image) => (
                        <div>
                          <img src={image.url} alt={image.citation} />
                          <p className="my-4">
                            Similarity:{" "}
                            <span className="font-bold">
                              {(image.similarity * 100).toPrecision(4)}%
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-2xl">Image is not a Plant</p>
          <p className="text-red-500 mt-1 text-lg">
            Please put the correct image and retry!
          </p>
        </div>
      )}
    </div>
  )
}
