import NavItem from '@/components/NavBar/NavItem';

export function NavBar({ links }) {
  return (
    <nav className='absolute bottom-0 w-full mb-16'>
        <ul className='flex items-center justify-center w-full'>
            {links.map(({name, path}) => {
                return <NavItem name={name} path={path} />
            })}
        </ul>
    </nav>
  );
};