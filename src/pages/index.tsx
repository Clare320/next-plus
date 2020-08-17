import { useRouter } from 'next/router'
import Link from 'next/link'
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
      <Link href='/testcsr'>
        <button className={styles.link_button}>Link-Button跳转</button>
      </Link>
      <Link href='/testcsr'>
        <a className={styles.link}>Link跳转CSR</a>
      </Link>
    </div>
  )
}

export default Home
