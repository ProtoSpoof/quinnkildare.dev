import Link from 'next/link';
import styles from '@/styles/components/NavBar/NavBar.module.scss'

export function NavBar({ links }) {
  return (
    <nav className='w-full z-0'>
        <ul className='flex items-center justify-center w-full'>
            {links.map(({name, path}, index) => {
                return (
                <li key={name}>
                    <Link className={`${styles.link} text-center text-xs sm:text-lg md:text-2xl`} href={path}>{name.toUpperCase()}</Link>
                </li>
                );
            })}
        </ul>
    </nav>
  );
};