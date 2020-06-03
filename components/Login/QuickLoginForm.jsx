import styles from './index.less'

export default function QuickLoginForm () {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <input type='text' id='phone' className={styles.input} placeholder='手机号码' maxLength={11} />
      </div>
      <div className={styles.input_container}>
        <input type='text' id='verifycode' className={styles.input} placeholder='验证码' />
        <span className={styles.span_get_code}>获取验证码</span>
      </div>
      <div className={styles.login_container}>
        <button className={styles.login}>立即登录</button>
      </div>
      <span className={styles.agreeprotocol}>点击登录表示已同意<a className={styles.protocol}>《可得用户协议》</a></span>
    </form>
  )
}
