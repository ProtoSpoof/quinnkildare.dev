import styles from '@/styles/skills.module.scss';

export const metadata = {
    title: 'Skills',
};

export default async function Skills() {
    const results = await fetch('https://gitconnected.com/v1/portfolio/protospoof')
    const skills = (await results.json()).skills;

    return (
        <main className='flex flex-col flex-grow w-full h-full items-center justify-center gap-8'>
            <h1 className='text-6xl'>My Skills</h1>
            <ul className='flex flex-col items-center justify-center gap-8'>
                {skills?.map(({name, level}, index) => {
                    return <li key={index}>{name} - {level}</li>
                })}
            </ul>
        </main>
    );
}
