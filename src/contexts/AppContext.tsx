import { createContext, useContext, useState } from "react";

interface iAppContext {
  registeredEmail: null | string
  handleRegisteredEmail: (s: null | string) => void
}

interface iAppProvider {
  children: React.ReactNode
}

const AppContext = createContext<iAppContext>({} as iAppContext);

export const AppProvider = ({ children }: iAppProvider) => {
  const [ registeredEmail, setRegisteredEmail ] = useState<null | string>(null);

  const handleRegisteredEmail = (s: null | string) => setRegisteredEmail(s);

  return (
    <AppContext.Provider value={{
      registeredEmail,
      handleRegisteredEmail,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
