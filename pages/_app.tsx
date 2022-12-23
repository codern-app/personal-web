import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { FirebaseProvider } from "../features/firebase/providers/firebase.provider";
import { NextIntlProvider } from "next-intl";
import en from "../i18n/en.json";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <NextIntlProvider messages={pageProps.messages || en} locale="en-US">
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </NextIntlProvider>
    </FirebaseProvider>
  );
}
