import Image from 'next/image';
import styles from '@/styles/about.module.scss';

export default function About() {
    return (
        <main className='flex flex-col w-full h-full items-center gap-5'>
            <h1 className='text-6xl'>About Me</h1>
            {/* Profile Picture */}
            <div className={styles.imageOutline}>
                <div className={`${styles.imageContainer} relative aspect-square w-64`}>
                    <Image src='/images/me.gif' alt='Author Profile Picture' fill/>
                </div>
            </div>
            {/* Description */}
            <p className='text-justify text-xl'>
                Minim officia nulla nulla aliquip voluptate nostrud. Velit irure quis dolore ipsum nostrud irure duis tempor amet anim aliquip dolor voluptate. Ex adipisicing aliqua irure proident voluptate pariatur dolore cupidatat. Culpa et in ipsum pariatur. Enim quis labore quis est aliquip magna mollit labore qui dolor culpa et ipsum duis. Laboris et excepteur fugiat et deserunt aliqua officia magna sint ea eu excepteur exercitation in. Eiusmod quis non eiusmod voluptate fugiat duis ad deserunt eu nisi occaecat.Dolore officia consequat tempor anim commodo irure elit in labore consequat fugiat esse qui. Irure nostrud enim exercitation voluptate voluptate nostrud fugiat pariatur non aliqua eiusmod excepteur incididunt eu. Laborum laborum laboris ut sit ad eu laboris cillum duis id laborum.
            </p>
        </main>
    );
}
