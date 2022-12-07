import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { FirebaseProvider } from "../features/firebase/providers/firebase.provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </FirebaseProvider>
  );
}
