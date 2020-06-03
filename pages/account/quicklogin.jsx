import LoginView from 'components/Login'

export default function QuickLogin () {
  return (
    <>
      <LoginView loginType={0} />
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      showTabbar: false,
      title: '快速登录'
    }
  }
}
