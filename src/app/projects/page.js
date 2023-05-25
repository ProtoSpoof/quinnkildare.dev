import { ProjectCard } from '@/components/ProjectCard';
import styles from '@/styles/projects.module.scss';

export const metadata = {
    title: 'Projects',
};

export default async function Projects() {
    const results = await fetch('https://gitconnected.com/v1/portfolio/protospoof')
    const projects = (await results.json()).projects;

    return (
        <main className='flex flex-col flex-grow w-full h-full items-center justify-center gap-8'>
            <h1 className='text-6xl'>My Projects</h1>
            <div className='grid lg:grid-cols-2 auto-rows-fr items-center justify-center gap-8'>
                {projects?.map(({displayName, summary, repositoryUrl, languages}, index) => {
                    return (
                        <ProjectCard name={displayName} summary={summary} link={repositoryUrl} languages={languages} />
                    );
                })}
            </div>
        </main>
    );
}
