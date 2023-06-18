import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../Button";
import Label from "./Label";
import Input from "./Input";
import { useAppContext } from "@/contexts";

const subscribeSchema = z.object({
  email: z.string()
    .nonempty("É necessário informar o email")
    .email("Email inválido")
})

type iSubscribe = z.infer<typeof subscribeSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<iSubscribe>({
    resolver: zodResolver(subscribeSchema)
  })
  const { handleRegisteredEmail } = useAppContext();

  const submit = ({ email }: iSubscribe) => handleRegisteredEmail(email);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full py-4 flex flex-col gap-7"
    >
      <div className="w-full flex flex-col gap-2">
        <Label messageError={errors.email?.message} />

        <Input
          register={register("email")}
          hasError={errors.email !== undefined}
        />
      </div>

      <Button type="submit">
        Inscrever-se ao Newsletter mensal
      </Button>
    </form>
  )
}

export default Form;
