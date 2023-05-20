import styles from '@/components/Fireflies/Fireflies.module.scss';

export function Fireflies() {
    return (
        <div className={styles.fireflyContainer}>
            {[...Array(1000)].map(() => {
                return(
                    <div className={styles.firefly}>
                        <div className={styles.light} />
                    </div>
                );
            })}
        </div>
    );
}