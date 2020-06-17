import { GetStaticProps } from 'next'
import LoginView from 'components/Login'

export default function QuickLogin() {
  return (
    <>
      <LoginView mode={0} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  return {
    props: {
      showTabbar: false,
      title: '快速登录'
    }
  }
}
