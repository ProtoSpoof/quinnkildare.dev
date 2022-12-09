import React from "react";
import Link from "next/link";
import styles from "../../styles/NavBar.module.scss";
import {useRouter} from "next/router";

type Props = {
    Path: string,
    Name: string
}


function NavLink({Path, Name}: Props) {
	const router = useRouter(); 

	function matchPath() {
		return router.pathname === Path || (router.pathname.startsWith(Path) && Path !== "/");
	}

	return (
		<Link href={Path}><a data-active={matchPath()} className={`flex justify-center items-center px-4 py-6 text-xl capitalize ${styles.link}`}>{Name}</a></Link>
	);
}

export default NavLink;