import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { font } from "@/styles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={font}>
      <Component {...pageProps} />
    </main>
  )
}

export default App;
