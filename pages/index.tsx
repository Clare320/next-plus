import { useState } from 'react'
import { GetStaticProps } from 'next'
import Router from 'next/router'
import Banner from 'components/Banner'
import styles from './index.less'
import cn from 'classnames'

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

function Menu() {
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    '首页',
    '年中狂欢提前购',
    '海淘',
    '框架',
    '新品',
    '爱配镜'
  ]

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className={styles.menu}>
      {
        items.map((item, index) => (
          <span
            key={item + index}
            className={cn(styles.normal, { [`${styles.active}`]: index === activeIndex })}
            onClick={() => { handleClick(index) }}
          >
            {item}
          </span>
        ))
      }
    </div>
  )
}

export default function Home() {
  const imgs = [
    {
      TargetUrl: 'https://m.kede.com/event/lyayr2020',
      ImageUrl: 'https://pic.keede.com/AppImages/b0dd7da0-edb3-410d-8246-df46aafd3005.jpg?v=2020060301'
    },
    {
      TargetUrl: 'https://m.kede.com/event/lyayr2020618',
      ImageUrl: 'https://pic.keede.com/AppImages/d41f5a34-cfee-45d3-bab9-16613eeae8ee.jpg?v=2020060301'
    },
    {
      TargetUrl: 'https://m.kede.com/lensvery.html',
      ImageUrl: 'https://pic.keede.com/AppImages/9193777c-12d7-4909-9cb8-3bfaafd8a127.jpg?v=2020060301'
    },
    {
      TargetUrl: 'https://m.kede.com/event/rt2020618',
      ImageUrl: 'https://pic.keede.com/AppImages/fd5382c5-ffe4-4567-bfe0-1d416d111eca.jpg?v=2020060301'
    },
    {
      TargetUrl: 'https://m.kede.com/event/kj2020618',
      ImageUrl: 'https://pic.keede.com/AppImages/95af3f83-5f3a-4d51-88d3-878adb83768f.jpg?v=2020060301'
    }
  ]

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <HomeTopBar score={0} />
        <Menu />
      </div>
      <div className={styles.wraper}>
        <Banner data={imgs} />
      </div>
      <div style={{ backgroundColor: 'cyan', height: '1000px' }}>
        PlaceHolder
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