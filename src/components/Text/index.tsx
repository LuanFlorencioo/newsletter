interface iTextProps {
  children: React.ReactNode
}

const Text = ({ children }: iTextProps) => {
  return (
    <p className="font-normal text-base text-grey-100">
      {children}
    </p>
  )
}

export default Text;
