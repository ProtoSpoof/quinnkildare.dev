import Image from 'next/image';
import styles from '@/styles/about.module.scss';

export const metadata = {
    title: 'About',
};


export default async function About() {
    const results = await fetch('https://gitconnected.com/v1/portfolio/protospoof', { next: { revalidate: 10 } })
    const basicInfo = (await results.json()).basics;

    return (
        <main className='flex flex-col flex-grow w-full h-full items-center justify-center gap-8'>
            <h1 className='text-6xl'>About Me</h1>
            <div className='flex flex-col  items-center justify-center gap-8'>
                <div className={styles.imageOutline}>
                    <div className={`${styles.imageContainer} relative aspect-square w-64`}>
                        <Image src={basicInfo.picture} alt='Author Profile Picture' fill/>
                    </div>
                </div>
                <p className={`${styles.content} text-xl`}>{basicInfo.summary}</p>
            </div>
        </main>
    );
}
