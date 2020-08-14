import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'normalize.css'
import { UseRequestProvider } from '@ahooksjs/use-request'
import { fetcher } from 'http-client'
import 'styles/app.less'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UseRequestProvider
      value={{
        requestMethod: fetcher
      }}
    >
      <Head>
        <title>可得眼镜网-网上配眼镜首选_隐形眼镜_美瞳美妆_正品底价7天随心退换！</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no' />
      </Head>
      <Component  {...pageProps} />
    </UseRequestProvider>
  )
}

export default MyApp
