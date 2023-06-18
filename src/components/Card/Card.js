import styles from './Card.module.scss'

export function Card({ icon, title, text }) {
  return (
    <div className={styles.feature_item}>
      <img src={icon} alt="Chat Icon" className={styles.feature_icon} />
      <h3 className={styles.feature_item_title}>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
