interface iButtonProps {
  type: "submit" | "button"
  children: React.ReactNode
}

const Button = ({ type, children }: iButtonProps) => {
  return (
    <button
      type={type}
      className="w-full py-5 bg-grey-100 rounded-lg font-bold text-base text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-tomato"
    >
      {children}
    </button>
  )
}

export default Button;
