import { useState } from 'react'
import { GetStaticProps } from 'next'
import Router from 'next/router'
import Banner from 'components/Banner'
import styles from './index.less'
import cn from 'classnames'
import useSWR from 'swr'

interface HomeTopBarProp {
  score: number
}

function HomeTopBar({ score }: HomeTopBarProp) {
  const gotoScorePage = () => {
    Router.push('/account/quicklogin')
  }

  const clickSearchBar = () => {

  }

  const gotoCategoryPage = () => {
    Router.push('/home/classmenu')
  }

  return (
    <div className={styles.bar}>
      <div className={styles.div_score} onClick={gotoScorePage}>
        <img src='/home/home_sign.png' className={styles.img_score} />
        <span className={styles.span_score_text}>{score}</span>
      </div>
      <div className={styles.div_search_bar} onClick={clickSearchBar} />
      <div className={styles.div_category} onClick={gotoCategoryPage}>
        <img src='/home/home_category.png' className={styles.img_category} />
        <span>分类</span>
      </div>
    </div>
  )
}

interface Channel {
  Name: string,
  TargetUrl: string,
}

interface MenuProp {
  channels: Channel[],
  handler: (item: Channel, index: number) => void
}

function Menu({ channels, handler }: MenuProp) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (channel: Channel, index: number) => {
    setActiveIndex(index)
    handler(channel, index)
  }

  // TODO: - 无法横向滚动
  return (
    <div className={styles.menu_outer_container}>
      <div className={styles.menu_inner_container}>
        <div className={styles.menu}>
        {
          channels.map((item, index) => (
            <span
              key={item.Name + index}
              className={cn(styles.normal, { [`${styles.active}`]: index === activeIndex })}
              onClick={() => { handleClick(item, index) }}
            >
              {item.Name}
            </span>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { data, error } = useSWR('/api/home')

  if (data === undefined || data === null) {
    return <div>Loading...</div>
  }

  const {
    Data: {
      SearchKeyword, ChannelList, BannerList
    }
  } = data

  const channelHandler = (item: Channel, index: number) => {

  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <HomeTopBar score={0} />
        <Menu channels={ChannelList} handler={channelHandler} />
      </div>
      <div className={styles.wraper}>
        <Banner data={BannerList} />
      </div>
      <div style={{ backgroundColor: 'cyan', height: '1000px' }}>
        {data ? data.ServerIp : error}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 0
    }
  }
}