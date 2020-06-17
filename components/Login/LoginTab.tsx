import Router from 'next/router'
import styles from './index.less'
import { LoginMode } from './login'

export default function LoginTab({ mode }: LoginMode) {
  const handleClick = (type: number) => {
    if (type === mode) {
      return
    }

    type === 0 ? Router.push('/account/quicklogin') : Router.push('/account/login')
  }

  return (
    <div className={styles.div_login_tab}>
      <div onClick={() => { handleClick(0) }}>
        <span
          className={mode === 0 ? styles.tab_select : styles.tab_default}
        >
          快速登录/注册
        </span>
      </div>
      <div onClick={() => { handleClick(1) }}>
        <span
          className={mode === 1 ? styles.tab_select : styles.tab_default}
        >
          密码登录
        </span>
      </div>
    </div>
  )
}
