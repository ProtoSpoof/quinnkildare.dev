import styles from '@/styles/home.module.scss';

export default function Home() {
    return (
        <main className='flex flex-col w-full h-full items-center justify-center'>
            <h1 className={`${styles.heroText} text-9xl`}>Quinlan Kildare</h1>
        </main>
    );
}
