import { UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  register: UseFormRegisterReturn
  hasError: boolean
}

const Input = ({ register, hasError }: iInputProps) => {
  const errorStyle = "border-tomato bg-pink-100 text-tomato focus:border-tomato placeholder:text-tomato";
  const defaultStyle = "border-grey-300 bg-white text-grey-100 focus:border-grey-200 placeholder:text-grey-300"

  return (
    <input
      id="email"
      type="text"
      autoComplete="off"
      placeholder="email@empresa.com"
      className={`w-full px-5 py-4 rounded-lg border-2 text-base outline-none ${hasError ? errorStyle : defaultStyle}`}
      {...register}
    />
  )
}

export default Input;
