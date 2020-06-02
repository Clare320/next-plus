import styles from './index.less'

export default function LoginTab({ loginType }) {
  return (
    <div className={styles.div_login_tab}>
      <span className={loginType === 0 ? styles.tab_select : styles.tab_default}>快速登录/注册</span>
      <span className={loginType === 1 ? styles.tab_select : styles.tab_default}>密码登录</span>
    </div>
  )
}