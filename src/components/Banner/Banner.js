import styles from './Banner.module.scss'
import bannerBackground from '../../assets/images/bank-tree.jpeg'

export function Banner() {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${bannerBackground})` }}
    >
      <section className={styles.hero__content}>
        <h2 className={styles.sr_only}>Promoted Content</h2>
        <p className={styles.hero__content__subtitle}>No fees.</p>
        <p className={styles.hero__content__subtitle}>No minimum deposit.</p>
        <p className={styles.hero__content__subtitle}>High interest rates.</p>
        <p className={styles.hero__content__text}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  )
}
