import styles from './index.less'
import Link from 'next/link'

export default function LoginForm () {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <input type='text' id='phone' className={styles.input} placeholder='手机号/邮箱/可得账户' />
      </div>
      <div className={styles.input_container}>
        <input type='text' id='verifycode' className={styles.input} placeholder='密码' />
      </div>
      <div className={styles.login_container}>
        <button className={styles.login}>立即登录</button>
      </div>
      <div className={styles.forget_password_container}>
        <Link href='...'>
          <a className={styles.forget_password}>忘记密码</a>
        </Link>
      </div>
    </form>
  )
}
