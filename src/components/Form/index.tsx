import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Label from "./Label";
import Input from "./Input";
import ButtonSubmit from "./ButtonSubmit";

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

  const submit = (formData: iSubscribe) => {
    console.log(formData);
  }

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

      <ButtonSubmit />
    </form>
  )
}

export default Form;
