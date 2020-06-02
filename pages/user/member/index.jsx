export default function Member() {
  return (
    <div>
      Member
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 4,
      title: '我的'
    }
  }
}