import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme/theme";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "../src/store/store";
import { PersistGate } from "redux-persist/integration/react";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import esMx from "javascript-time-ago/locale/es-MX.json";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(esMx);

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
