import Head from 'next/head'
import globalStyles from '../global.less'
import Tabbar from '../components/Tabbar'

function MyApp({ Component, pageProps }) {
  const { showTabbar, tabbarIndex, title } = pageProps
  return (
    <div className={globalStyles.container}>
      <Head>
        <title>{title || '可得眼镜网'}</title>
      </Head>
      <div className={globalStyles.main}>
        <Component {...pageProps} />
      </div>
      {showTabbar && <Tabbar selectedIndex={tabbarIndex} />}
    </div>
  )
}

export default MyApp