import NavItem from '@/components/NavBar/NavItem';

export function NavBar({ links }) {
  return (
    <nav className='w-full pb-10'>
        <ul className='flex items-center justify-evenly w-full'>
            {links.map(({name, path}) => {
                return <NavItem name={name} path={path} />
            })}
        </ul>
    </nav>
  );
};