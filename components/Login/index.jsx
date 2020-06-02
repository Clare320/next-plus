import LoginTab from './LoginTab'
import ThirdLogin from './ThirdLogin'
import QuickLoginForm from './QuickLoginForm'

export default function LoginView({ loginType }) {
  return (
    <div>
      <img src="/login/top_logo.png" style={{ width: '100%' }} />
      <LoginTab loginType={loginType} />
      {loginType === 0 ?
        <QuickLoginForm /> :
        <LoginForm />
      }
      <ThirdLogin />
    </div>
  )
}