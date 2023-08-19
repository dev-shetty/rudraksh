interface HeaderProps {
  heading: string
}

export default function Header({ heading }: HeaderProps) {
  return (
    <p className="scroll-m-20 px-4 text-center text-3xl md:text-5xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text">
      {heading}
    </p>
  )
}
