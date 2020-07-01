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
      roundLengths: true,
      loop: true,
      autoplay: true
    })

    setMySwiper(tmpSwiper)
  }, [])

  return (
    <div className={styles.banner}>
      <div className='swiper-container'>
        <div className={cn('swiper-wrapper', styles.swiper_wrapper)}>
          {
            data.map((item, index) => (
              <div key={'banner' + index} className={cn('swiper-slide', styles.swiper_slide)}>
                <a className={styles.swiper_a} href={item.TargetUrl}>
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

/**
 * Swiper swiper-container swiper-wrapper的宽度和swiper-slide不一致
 * swiper-slide的宽度是swiper-wrapper宽度四舍五入优化了
 */