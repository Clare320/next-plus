import Router from 'next/router'
import styles from '../styles/home.less'
import ImageAndTextButton from '../components/ImageAndTextButton'

function HomeTopBar ({ score }) {
  const gotoScorePage = () => {
    Router.push('/account/quicklogin')
  }

  const clickSearchBar = () => {

  }

  const gotoCategoryPage = () => {
    Router.push('/home/classmenu')
  }

  return (
    <div className={styles.top_bar}>
      <div className={styles.div_score} onClick={gotoScorePage}>
        <img src='/home/home_sign.png' className={styles.img_score} />
        <span className={styles.span_score_text}>100</span>
      </div>
      <div className={styles.div_search_bar} onClick={clickSearchBar} />
      <div className={styles.div_category} onClick={gotoCategoryPage}>
        <img src='/home/home_category.png' className={styles.img_category} />
        <span>分类</span>
      </div>
    </div>
  )
}

export default function Home () {
  return (
    <>
      <HomeTopBar />
      <div>Home11</div>
      <div style={{ backgroundColor: 'red', height: '1300px', width: '100%' }} />
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 0
    }
  }
}
