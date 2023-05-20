import { Fireflies } from '@/components/Fireflies';
import { NavBar } from '@/components/NavBar/NavBar';
import '@/styles/globals.scss';

export const metadata = {
    title: {
        template: '%s | quinnkildare.dev',
        default: 'Home | quinnkildare.dev',
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
                <div className='absolute w-full h-full top-0 left-0 p-8'>
                    {children}
                </div>
                <NavBar links={LINKS}/>
            </body>
        </html>
    );
}
