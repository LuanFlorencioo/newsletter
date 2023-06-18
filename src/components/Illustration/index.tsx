import Image from "next/image";
import illustrationMobile from "/public/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "/public/images/illustration-sign-up-desktop.svg";
import useMedia from "use-media";

const Illustration = () => {
  const isWide = useMedia({ maxWidth: 768});

  return (
    <Image
      src={isWide ? illustrationMobile : illustrationDesktop}
      alt="Illustration"
    />
  )
}

export default Illustration;
