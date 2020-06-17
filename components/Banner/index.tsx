import Swiper from 'swiper'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './index.less'

interface BannerItem {
  ImageUrl: string,
  TargetUrl: string
}

interface BannerList {
  data: BannerItem[]
}

export default function Banner({ data }: BannerList) {
  const [mySwiper, setMySwiper] = useState<Swiper>()

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
                <a href={item.TargetUrl}>
                  <img className={styles.swiper_img} src={item.ImageUrl} />
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
