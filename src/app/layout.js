import { Fireflies } from '@/components/Fireflies';
import { NavBar } from '@/components/NavBar/NavBar';
import '@/styles/globals.scss';

export const metadata = {
    title: {
        template: '%s | quinnkildare.dev',
        default: 'Home | quinnkildare.dev',
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
    {name: 'Contact', path: '/contact'}
];

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='h-screen w-screen overflow-hidden honeycomb'>
                <Fireflies />
                <div className='container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8'>
                    {children}
                </div>
                <NavBar links={LINKS}/>
            </body>
        </html>
    );
}
