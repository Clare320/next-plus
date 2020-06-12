import Head from 'next/head'
import globalStyles from 'styles/global.less'
import Tabbar from '../components/Tabbar'
import { Provider } from 'mobx-react'
import { useStore } from 'store'

function MyApp ({ Component, pageProps }) {
  const { showTabbar, tabbarIndex, title, initialState } = pageProps
  const store = useStore(initialState)

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default MyApp

/**
 * Provider reject --> 应该使用React.createContext(defaultValue) useContext来代替
 * 创建的Context没有从根节点传进来，没有匹配到Provider时，defaultValue才生效
 * 1. 直接创建React.createContext(mobx对象)
 * 2. 使用useContext返回创建的对象，具体使用
 *
 */
