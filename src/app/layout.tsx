'use client';

import { Provider as ChakraProvider } from "@/components/ui/provider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";

import "./globals.css";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Netnado SSO</title>
      </head>
      <body>
        <ChakraProvider>
          <ReduxProvider store={store}>
            {children}
          </ReduxProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
