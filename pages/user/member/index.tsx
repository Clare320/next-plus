import Link from 'next/link'
import styles from 'styles/member.less'

function LinkItem ({ href, icon, title }) {
  return (
    <Link href={href}>
      <div className={styles.link_container}>
        <img className={styles.link_image} src={`/member/${icon}@2x.png`} />
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default function Member () {
  const options = [
    { option: '余额', value: 0.00 },
    { option: '优惠券', value: 0 },
    { option: '积分', value: 296 }
  ]

  const orders = [
    {
      link: '',
      icon: 'WaitingPay',
      title: '待付款'
    },
    {
      link: '',
      icon: 'WaitingDeliver',
      title: '待发货'
    },
    {
      link: '',
      icon: 'Review',
      title: '待评价'
    },
    {
      link: '',
      icon: 'Returning',
      title: '退换货'
    }
  ]

  const services = [
    { link: '', icon: 'MyCollection', title: '我的收藏' },
    { link: '', icon: 'MyBrowse', title: '浏览记录' },
    { link: '', icon: 'shopping_address', title: '收货地址' },
    { link: '', icon: 'eyeglass_prescription', title: '验光单' },
    { link: '', icon: 'Security', title: '账户安全' }
  ]

  const features = [
    { link: '', icon: 'online_service', title: '微信客服' },
    { link: '', icon: 'phone_service', title: '电话客服' },
    { link: '', icon: 'Feedback', title: '我要告状' },
    { link: '', icon: 'AboutKede', title: '关于可得' }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href=''>
          <a><img className={styles.setting} src='/member/settings@2x.png' /></a>
        </Link>
        <div className={styles.user}>
          <Link href=''>
            <a>
              <img className={styles.avatar} src='https://pic.keede.com//User/Head/c828f3b1-7921-4bdd-be32-ebbd78d39a63.jpeg?v=53b8f948-2d30-4fb5-b06d-6b814c9a9cf6' />
            </a>
          </Link>
          <div className={styles.introduce}>
            <div className={styles.name}>superJie</div>
            <div className={styles.role}>会员</div>
          </div>
        </div>
        <div className={styles.member}>
          <span>SVIP会员</span>
          <span>尊享会员特权</span>
          <Link href=''>
            <a>查看详情<span>▲</span></a>
          </Link>
        </div>
        <div className={styles.account}>
          {
            options.map((item, index) => (
              <div key={'option' + index} className={styles.score}>
                <span className={styles.value}>000</span>
                <span className={styles.option}>余额</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title_bar} style={{ position: 'relative' }}>
          我的订单
          <Link href=''>
            <a className={styles.invoice}>{'查看全部订单/电子发票>'}</a>
          </Link>
        </div>
        <div className={styles.content}>
          {
            orders.map((item, index) => (
              <LinkItem key={'order' + index} href={item.link} icon={item.icon} title={item.title} />
            ))
          }
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title_bar}>
          我的服务
        </div>
        <div className={styles.content}>
          {
            services.map((item, index) => (
              <div
                key={'service' + index}
                className={styles.service}
                style={{
                  borderRight: (index + 1) % 4 === 0 ? 'none' : '0.5px solid #ebebeb',
                  borderBottom: (index / 4) < 1 ? '0.5px solid #ebebeb' : 'none'
                }}
              >
                <LinkItem title={item.title} icon={item.icon} href={item.link} />
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title_bar}>
          更多功能
        </div>
        <div className={styles.content}>
          {
            features.map((item, index) => (
              <div className={styles.more} key={'service' + index} style={{ borderRight: index === (features.length - 1) ? 'none' : '0.5px solid #ebebeb' }}>
                <LinkItem name={styles.more} title={item.title} icon={item.icon} href={item.link} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 4,
      title: '我的'
    }
  }
}
