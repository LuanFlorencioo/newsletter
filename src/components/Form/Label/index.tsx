interface iLabelProps {
  messageError: string | undefined
}

const Label = ({ messageError }: iLabelProps) => {
  return (
    <label htmlFor="email" className="font-bold text-sm text-grey-100 flex justify-between">
      Endereço de email

      {
        messageError && (
          <span className="text-tomato">
            {messageError}
          </span>
        )
      }
    </label>
  )
}

export default Label;
