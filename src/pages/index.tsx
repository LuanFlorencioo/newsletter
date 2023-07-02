import { ConcludedSection, RegisterSection } from "@/components";
import { useAppContext } from "@/contexts";

const Home = () => {
  const { registeredEmail } = useAppContext();

  return (
    <div className="w-full min-h-screen bg-grey-200 md:px-5 md:flex md:justify-center md:items-center">
      {registeredEmail === null ? <RegisterSection /> : <ConcludedSection />}
    </div>
  )
}

export default Home;
