import Swiper from 'swiper'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './index.less'

export default function Banner ({ data }) {
  const [mySwiper, setMySwiper] = useState(null)

  useEffect(() => {
    const tmpSwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: true
    })

    setMySwiper(tmpSwiper)
  }, [])

  return (
    <div className={styles.banner}>
      <div className={cn('swiper-container', styles.swiper)}>
        <div className='swiper-wrapper'>
          {
            data.map((item, index) => (
              <div key={'banner' + index} className={cn('swiper-slide', styles.swiper_li)}>
                <a href={item.link}>
                  <img className={styles.swiper_img} src={item.url} />
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
