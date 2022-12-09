import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import styles from "../../styles/NavBar.module.scss";

type Props = {
    Links: {path: string, name: string}[]
}

function NavBar({Links}: Props) {
	return (
		<nav className="flex w-full fixed justify-evenly items-center px-4 bg-black/50 z-20">
			<Link href="/"><a className={`px-2 smallglow ${styles.logo}`}>QK</a></Link>
			<ul className="flex flex-1 justify-end">
				{
					Links.map((link) => {
						return (
							<li key={link.path}>
								<NavLink Path={link.path} Name={link.name} />
							</li>
						);
					})
				}
			</ul>
		</nav>
	);
}

export default NavBar;