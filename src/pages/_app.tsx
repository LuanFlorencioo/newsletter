import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { font } from "@/styles";
import { AppProvider } from "@/contexts";
import { Head } from "@/components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={font}>
      <AppProvider>
        <Head />
        <Component {...pageProps} />
      </AppProvider>
    </main>
  )
}

export default App;
