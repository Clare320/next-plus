import LoginTab from './LoginTab'
import ThirdLogin from './ThirdLogin'
import QuickLoginForm from './QuickLoginForm'
import LoginForm from './LoginForm'
import Router from 'next/router'
import { useEffect } from 'react'

export default function LoginView ({ loginType }) {
  useEffect(() => {
    loginType === 0 ? Router.prefetch('/account/login') : Router.prefetch('/account/quicklogin')
  }, [])

  return (
    <div>
      <img src='/login/top_logo.png' style={{ width: '100%' }} />
      <LoginTab loginType={loginType} />
      {loginType === 0
        ? <QuickLoginForm />
        : <LoginForm />}
      <ThirdLogin />
    </div>
  )
}
