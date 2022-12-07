import React from "react";
import type { AppProps } from "next/app";
import CustomHead from "../components/CustomHead";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<CustomHead Title="quinnkildare.dev" Description="My Personal Site" />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
