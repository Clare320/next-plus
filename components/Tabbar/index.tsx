import Router from 'next/router'
import { observer, inject } from 'mobx-react'
import ImageAndTextButton from '../ImageAndTextButton'
import styles from './index.less'
import { UserStore } from 'store'

interface TabbarProp {
  selectedIndex: number,
  store?: UserStore
}

interface TabbarItem {
  title: string,
  defaultImage: string,
  selectedImage: string,
  path: string
}

const Tabbar = inject('store')(observer(({ selectedIndex = 0, store }: TabbarProp) => {
  const items: TabbarItem[] = [
    {
      title: '首页',
      defaultImage: '/tabbar/tab_home.png',
      selectedImage: '/tabbar/tab_home_select.png',
      path: '/'
    },
    {
      title: '种草',
      defaultImage: '/tabbar/tab_discovery.png',
      selectedImage: '/tabbar/tab_discovery_select.png',
      path: '/community'
    },
    {
      title: '会员中心',
      defaultImage: '/tabbar/tab_svipCenter.png',
      selectedImage: '/tabbar/tab_svipCenter.png',
      path: '/user/membercenter'
    },
    {
      title: '购物车',
      defaultImage: '/tabbar/tab_cart.png',
      selectedImage: '/tabbar/tab_cart_select.png',
      path: '/cart'
    },
    {
      title: '我的',
      defaultImage: '/tabbar/tab_mine.png',
      selectedImage: '/tabbar/tab_mine_select.png',
      path: '/user/member'
    }
  ]

  const handler = (item: TabbarItem) => {
    Router.push(item.path)
  }

  return (
    <div className={styles.container}>
      {
        items.map((item, index) => (
          <ImageAndTextButton
            key={item.title + index}
            title={item.title}
            defaultImage={item.defaultImage}
            selectedImage={item.selectedImage}
            isSelected={index === selectedIndex}
            handler={() => { handler(item) }}
            showBadge={index === 3}
            badge={store!.cartGoodsNum}
          />
        ))
      }
    </div>
  )
}))

export default Tabbar