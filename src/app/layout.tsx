'use client';

import { Provider as ChakraProvider } from "@/components/ui/provider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";

import "./globals.css";
import LocalStorageLoader from "@/app/LocalStorageLoader";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Netnado SSO</title>
      </head>
      <body suppressHydrationWarning>
        <ChakraProvider>
          <ReduxProvider store={store}>
            <LocalStorageLoader />
            {children}
          </ReduxProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
