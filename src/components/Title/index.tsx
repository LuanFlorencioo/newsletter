interface iTitleProps {
  children: React.ReactNode
}

const Title = ({ children }: iTitleProps) => {
  return (
    <h1 className="font-bold text-4xl text-grey-100">
      {children}
    </h1>
  )
}

export default Title;
