import React from "react";
import type { AppProps } from "next/app";
import CustomHead from "../components/CustomHead";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.scss";

const LINKS = [
	{path: "/", name: "home",},
	{path: "/card", name: "card",}
];

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<CustomHead Title="quinnkildare.dev" Description="My Personal Site" />
			<NavBar Links={LINKS}/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
