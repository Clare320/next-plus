import Router from 'next/router'
import styles from './index.less'

export default function LoginTab ({ loginType }) {
  const handleClick = (type) => {
    if (type === loginType) {
      return
    }

    type === 0 ? Router.push('/account/quicklogin') : Router.push('/account/login')
  }

  return (
    <div className={styles.div_login_tab}>
      <div onClick={handleClick.bind(this, 0)}>
        <span
          className={loginType === 0 ? styles.tab_select : styles.tab_default}
        >
          快速登录/注册
        </span>
      </div>
      <div onClick={handleClick.bind(this, 1)}>
        <span
          className={loginType === 1 ? styles.tab_select : styles.tab_default}
        >
          密码登录
        </span>
      </div>
    </div>
  )
}
