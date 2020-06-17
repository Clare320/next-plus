import { GetStaticProps } from 'next'

export default function Community() {
  return (
    <div>
      Community
    </div>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 1,
      title: '发现'
    }
  }
}
