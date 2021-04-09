import { AnimateSharedLayout } from "framer-motion";
import { AppProps } from "next/app";
import React from "react";
import HeaderLayout from "../components/Logo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
