import styles from '@/styles/components/SkillCard/SkillCard.module.scss';

export function SkillCard({ name, SkillIcon }) {
  return (
    <div className={styles.outer}>
        <div className={`${styles.inner} w-24 -mb-7 sm:w-28 sm:-mb-8 md:w-40 md:-mb-11 overflow-hidden`}>
            <div className={styles.content}>
                <SkillIcon size='50%'/>
            </div>
        </div>
    </div>
  )
}