export default function ClassMenu () {
  return (
    <>
      ClassMenu
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 0
    }
  }
}
