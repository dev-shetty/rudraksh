import { DoubleArrowDownIcon } from "@radix-ui/react-icons"

export default function ScrollDown() {
  return (
    <div className="animate-bounce [animation-duration:1500ms] absolute bottom-4">
      <DoubleArrowDownIcon className="scale-125 md:scale-150" />
    </div>
  )
}
