export default function Login() {
  return (
    <>
      <img src="/login/top_logo.png" />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      showTabbar: false,
      title: '用户登录'
    }
  }
}
