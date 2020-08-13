import { GetServerSideProps } from 'next'

interface Props {
  name: string
}


const TestSSRPage = ({ name }: Props) => {
  return (
    <div>
      <p>This is test ssr page!</p>
      <p>name: {name}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      name: 'ssr'
    }
  }
}

export default TestSSRPage
