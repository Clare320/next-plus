import { GetStaticProps } from 'next'
export default function ClassMenu() {
  return (
    <>
      ClassMenu
    </>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 0
    }
  }
}
