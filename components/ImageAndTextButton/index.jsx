import styles from './index.less'

export default function ImageAndTextButton ({ title, defaultImage, selectedImage, isSelected, handler, showBadge = false, badge = 0 }) {
  return (
    <div className={styles.container} onClick={handler}>
      <img className={styles.image} src={isSelected ? selectedImage : defaultImage} />
      <span className={styles.title}>{title}</span>
      {
        showBadge &&
          <span className={styles.badge}>{badge}</span>
      }
    </div>
  )
}
