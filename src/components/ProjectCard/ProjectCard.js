import styles from '@/styles/components/ProjectCard/ProjectCard.module.scss';

export function ProjectCard({name, summary, link, languages}) {
  return (
    <a href={link} className={styles.card}>
        <h2 className='text-2xl'>{name}</h2>
        <hr />
        <p className='text-sm'>{summary}</p>
        <ul className={styles.languages}>
            {languages.map((language) => {
                return <li className='text-xs'>{language}</li>;
            })}
        </ul>
    </a>
  );
}