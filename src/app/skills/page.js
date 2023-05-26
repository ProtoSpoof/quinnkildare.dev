import { SkillCard } from '@/components/SkillCard';
import styles from '@/styles/skills.module.scss';
import * as icons from 'devicons-react';

export const metadata = {
    title: 'Skills',
};

export default async function Skills() {
    const results = await fetch('https://gitconnected.com/v1/portfolio/protospoof', { next: { revalidate: 10 } })
    const skills = (await results.json()).skills;

    function strip_and_fix_names(name) {
        name = name.replaceAll('.', '').replaceAll('+', 'plus');
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + 'Original';
    }

    return (
        <main className='flex flex-col flex-grow w-full h-full items-center justify-center gap-8'>
            <h1 className='text-6xl'>My Skills</h1>
            <div className={`${styles.skills} grid items-center justify-center`}>
                {skills?.map(({name}) => {
                    return <SkillCard name={name} SkillIcon={icons[strip_and_fix_names(name)]} />
                })}
            </div>
        </main>
    );
}
