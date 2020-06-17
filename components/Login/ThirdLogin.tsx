import styles from './index.less'

export default function ThirdLogin () {
  return (
    <div className={styles.third_login_container}>
      <div className={styles.third_login_header}>
        <div className={styles.third_login_headerline} />
        <span>第三方登录</span>
        <div className={styles.third_login_headerline} />
      </div>
      <div className={styles.third_logos}>
        <img className={styles.third_logo_image} src='/login/qq.png' />
        <img className={styles.third_logo_image} src='/login/weibo.png' />
        <img className={styles.third_logo_image} src='/login/alipay.png' />
      </div>
    </div>
  )
}
