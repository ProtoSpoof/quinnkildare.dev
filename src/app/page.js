import { Slider } from '@/components/Slider';
import styles from '@/styles/home.module.scss';

export default function Home() {
    return ( 
        <main className='container flex flex-col w-full h-full items-center justify-center'>
            <h1 className={`${styles.heroText} text-9xl`}>Quinlan Kildare</h1>
            <h2 className={`${styles.heroSubtext} text-4xl`}><Slider words={['Computer Scientist', 'Programmer', 'Engineer']} effect='topDown' /></h2>
        </main>
    );
}
