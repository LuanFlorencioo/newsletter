import Image from "next/image";
import iconSuccess from "/public/images/icon-success.svg";
import { Button, Text, Title } from "@/components";
import { useAppContext } from "@/contexts";

const ConcludedSection = () => {
  const { registeredEmail, handleRegisteredEmail } = useAppContext();

  const removeEmail = () => handleRegisteredEmail(null);

  return (
    <div className="w-full min-h-screen px-5 bg-white flex flex-col items-center md:w-max md:min-h-max md:p-10 md:rounded-[20px]">
      <div className="w-full max-w-[370px] h-screen pt-20 pb-5 flex flex-col justify-between gap-10 md:h-max md:p-0">
        <div className="w-full flex flex-col gap-5">
          <Image src={iconSuccess} alt="icon success" />

          <Title>
            Obrigado por se inscrever!
          </Title>

          <Text>
            A confirmação por email foi enviada para <strong>{registeredEmail}</strong>. Por favor, abra-o email enviado e clique no botão de confimar a inscrição
          </Text>
        </div>

        <Button type="button" onClick={removeEmail}>
          Cancelar inscrição
        </Button>
      </div>
    </div>
  )
}

export default ConcludedSection;
