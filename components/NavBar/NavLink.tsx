import React from "react";
import Link from "next/link";
import styles from "../../styles/NavBar.module.scss";

type Props = {
    Path: string,
    Name: string
}

function NavLink({Path, Name}: Props) {
	return (
		<Link href={Path}><a className={`flex justify-center items-center px-4 py-6 text-xl capitalize ${styles.linkglow}`}>{Name}</a></Link>
	);
}

export default NavLink;