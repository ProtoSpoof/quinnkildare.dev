import styles from '@/styles/components/SkillCard/SkillCard.module.scss';

export function SkillCard({ name, SkillIcon }) {
  return (
    <div className={styles.outer}>
        <div className={`${styles.inner} w-24 -mb-[1.9rem] sm:w-28 sm:-mb-[2.15rem] md:w-40 md:-mb-[3.1rem] overflow-hidden`}>
            <div className={styles.content}>
                <SkillIcon size='50%'/>
            </div>
        </div>
    </div>
  )
}