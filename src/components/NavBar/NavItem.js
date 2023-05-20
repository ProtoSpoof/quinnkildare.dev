import Link from 'next/link';
import styles from '@/components/NavBar/NavItem.module.scss'

export default function NavItem({name, path}) {
  return (
    <li className>
        <Link className={`${styles.link} text-center text-2xl px-10 py-5`} href={path}>{name.toUpperCase()}</Link>
    </li>
  );
}