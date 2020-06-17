import { GetStaticProps } from 'next'
import LoginView from 'components/Login'

export default function Login() {
  return (
    <>
      <LoginView mode={1} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  return {
    props: {
      showTabbar: false,
      title: '用户登录'
    }
  }
}
