import {
  Illustration,
  Title,
  Text,
  List,
  Form,
} from "@/components";

const RegisterSection = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start gap-10 md:w-max md:min-h-max md:p-5 md:rounded-[20px] md:flex-row-reverse">
      <Illustration />

      <div className="w-full max-w-[370px] px-5 flex flex-col gap-5">
        <Title>Fique atualizado!</Title>

        <Text>
          Junte-se a mais de 60.000 gerentes de produto que recebem atualizações mensais sobre:
        </Text>

        <List />

        <Form />
      </div>
    </div>
  )
}

export default RegisterSection;
