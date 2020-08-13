import { useRouter } from 'next/router'
import styles from 'styles/index.less'

const Home = () => {
  const buttons = [
    { title: 'csr渲染', route: '/testcsr' },
    { title: 'ssr渲染', route: '/testssr' }
  ]

  const router = useRouter()

  return (
    <div className={styles.container}>
      <h2>Home Page</h2>
      {
        buttons.map((item, index) => (
          <div
            key={'button' + index}
            className={styles.button}
            onClick={() => {
              router.push(item.route)
            }}
          >
            {item.title}
          </div>
        ))
      }
    </div>
  )
}

export default Home
