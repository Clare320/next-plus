import { FC } from 'react'
import Router from 'next/router'
import styles from './index.less'

interface NavigationBarProps {
  children?: JSX.Element[] | JSX.Element
  title?: string
  showRightMenu?: boolean
}

const NavigationBar: FC<NavigationBarProps> = ({ title, children, showRightMenu = true }) => {

  const pop = () => {
    Router.back()
  }

  return (
    <div className={styles.bar}>
      <div className={styles['left-image']} onClick={pop}>
        <img src='/navigation/nav_back@2x.png' />
      </div>
      {
        title &&
        <span className={styles.title}>{title}</span>
      }
      {
        children
      }
      {
        showRightMenu &&
        <div className={styles['right-menu']}><img /></div>
      }
    </div>
  )
}

export default NavigationBar