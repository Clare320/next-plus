import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'normalize.css'
import styles from './app.less'
import Tabbar from 'components/Tabbar'
import { Provider } from 'mobx-react'
import { useStore } from 'store'
import { SWRConfig } from 'swr'
import axiosInstance from 'utils/request'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { showTabbar = true, tabbarIndex = 0, title, initialState } = pageProps
  const store = useStore(initialState)

  return (
    <SWRConfig
      value={{
        fetcher: (url, type = 'GET', params) => {
          if (type === 'GET') {
            return axiosInstance.get(url).then(res => {
              return res.data
            })
          } else if (type === 'POST') {
            return axiosInstance.post(url, params && { params }).then(res => res.data)
          }
        }
      }}
    >
      <Provider store={store}>
        <div className={styles.container} style={showTabbar ? { padding: '0px 0px 55px 0px' } : undefined}>
          <Head>
            <title>{title || '可得眼镜网'}</title>
          </Head>
          <div className={styles.main}>
            <Component {...pageProps} />
          </div>
          {showTabbar && <Tabbar selectedIndex={tabbarIndex} />}
        </div>
      </Provider>
    </SWRConfig>
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
