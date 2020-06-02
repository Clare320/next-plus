export default function MemberCenter() {
  return (
    <div>
      MemberCenter
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 2,
      title: '会员中心'
    }
  }
}