import { Fireflies } from '@/components/Fireflies';
import { NavBar } from '@/components/NavBar/NavBar';
import '@/styles/globals.scss';

export const metadata = {
    title: {
        template: '%s │ Quinlan Kildare',
    },
    icons: {
        icon: '/favicon.svg',
    }
};

const LINKS = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Skills', path: '/skills'},
    {name: 'Projects', path: '/projects'},
    // {name: 'Card', path: '/card'},
    // {name: 'Contact', path: '/contact'},
];

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='flex flex-col items-center h-screen w-full honeycomb'> 
            {/* STOP */}
                <Fireflies />
                <div className='container min-h-screen h-full flex w-full flex-col overflow-x-hidden p-8 gap-8'>
                    {children}
                    <NavBar links={LINKS} />
                </div>
            </body>
        </html>
    );
}
