export default function Community () {
  return (
    <div>
      Community
    </div>
  )
}

export async function getStaticProps () {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 1,
      title: '发现'
    }
  }
}
