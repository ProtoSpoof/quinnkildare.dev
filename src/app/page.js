import { Slider } from '@/components/Slider';
import styles from '@/styles/home.module.scss';

export const metadata = {
    title: 'Home │ Quinlan Kildare',
};

export default function Home() {
    return ( 
        <main className='flex flex-col w-full flex-grow h-full items-center justify-center'>
            <h1 className={`${styles.heroText} text-5xl sm:text-7xl lg:text-9xl whitespace-nowrap`}>Quinlan Kildare</h1>
            <h2 className={`${styles.heroSubtext} text-2xl sm:text-3xl lg:text-4xl`}><Slider words={['Computer Scientist', 'Programmer', 'Engineer']} effect='topDown' /></h2>
        </main>
    );
}
