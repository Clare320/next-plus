import Head from 'next/head'
import globalStyles from 'styles/global.less'
import Tabbar from '../components/Tabbar'

function MyApp ({ Component, pageProps }) {
  const { showTabbar, tabbarIndex, title } = pageProps
  return (
    <div className={globalStyles.container} style={showTabbar ? { padding: '0px 0px 55px 0px' } : null}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no' />
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
