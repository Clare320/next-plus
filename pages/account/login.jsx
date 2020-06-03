import LoginView from 'components/Login'

export default function Login () {
  return (
    <>
      <LoginView loginType={1} />
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      showTabbar: false,
      title: '用户登录'
    }
  }
}
