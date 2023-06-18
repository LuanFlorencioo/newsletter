interface iButtonProps {
  type: "submit" | "button"
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ type, children, onClick }: iButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-5 bg-grey-100 rounded-lg font-bold text-base text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-tomato"
    >
      {children}
    </button>
  )
}

export default Button;
