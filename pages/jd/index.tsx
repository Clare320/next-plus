import React, {FC} from "react";
import httpclient from '../../utils/request'
import styles from './style.less'

interface BannerProps {
    banner: string[]
}

interface NaviProps {
    imgUrl: string;
    naviName: string
}

interface CutDownProps {
    imgUrl: string;
    time?: number;
}

interface TouTiaoProps {
    tag: string;
    title: string,
    people: number,
    price: number
}

interface QuProductProps {
    title:{
        imgUrl:string,
        name:string
    },
    best:{
        imgUrl:string,
        title:string,
        desc:string,
        price:number,
        commonNum:number
    }[]
}

interface JDHomeProps {
    banner: string[];
    ad_banner: string[];
    navi: NaviProps[];
    cutdown: CutDownProps;
    toutiao: TouTiaoProps[];
    quproduct: QuProductProps;
}

/*顶部Banner*/
const Banner: FC<BannerProps> = (props) => {
    const {banner} = props
    return (
        <div className={styles.banner}>
            <ul className={styles.banner_list}>
                {
                    banner.map((item, i) => {
                        return (
                            <li key={i} className={styles.banner_item}>
                                <img
                                    src={item}
                                    alt='banner'
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <div className={styles.banner_indexs}>
                <span className={styles.banner_indexs_item}/>
                <span className={`${styles.banner_indexs_item} ${styles.selected}`}/>
                <span className={styles.banner_indexs_item}/>
            </div>
        </div>
    )
}

/*导航Navi*/
const NavigationZone: FC<{ navi: NaviProps[] }> = ({navi = []}) => {
    return (
        <div className={styles.navi}>
            {
                navi.map((item, index) => {
                    return (
                        <a
                            key={index}
                            className={styles.navi_item}
                        >
                            <img
                                src={item.imgUrl}
                                alt='navi'
                            />
                            <span className={styles.navi_name}>
                               {item.naviName}
                           </span>
                        </a>
                    )
                })
            }
        </div>
    )
}

/*秒杀*/
const CutDownSale: FC<CutDownProps> = ({imgUrl}) => {
    return (
        <div className={styles.cutdown}>
            <img
                src={imgUrl}
                alt={'cutdown'}
            />
            <p>
                <span>倒计时</span>
                <span className={styles.cutdown_time}>0</span>
                <span className={styles.cutdown_time}>0</span>
                <span>分</span>
                <span className={styles.cutdown_time}>0</span>
                <span className={styles.cutdown_time}>0</span>
                <span>秒</span>
                <span>结束</span>
            </p>
        </div>
    )
}

/*京东头条*/
const TouTiao: FC<{ toutiao: TouTiaoProps[] }> = ({toutiao}) => {
    return (
        <div className={styles.toutiao}>
            <div className={styles.toutiao_msg}>
                <ul className={styles.toutiao_msg_list}>
                    {
                        toutiao.map(({tag, title, people, price},index) => {
                            return (
                                <li
                                    key={index}
                                    className={styles.toutiao_msg_list_item}
                                >
                                    <p className={styles.toutiao_msg_list_item_text}>
                                        <span className={styles.toutiao_msg_tag}>{tag}</span>
                                        {title}
                                        <span className={styles.toutiao_msg_em}>{`${people}人成团 ${price}包邮`}</span>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <img
                    src={'https://jdc.jd.com/img/710x90'}
                    alt={'toutiao'}
                />
            </div>
        </div>
    )
}

/*趣好货*/
const QuProduct: FC<{quproduct:QuProductProps}> = ({quproduct}) => {

    const {title,best=[]} = quproduct;

    return (
        <div className={styles.quproduct}>
            {/*title*/}

            <QuTitle title={title}/>

            <div className={styles.best_product_container}>
                <div className={styles.best_product}>
                    <span>最好货</span>
                </div>

                <ul className={styles.best_product_list}>
                    {
                        best.map((item,index) => {
                            return (
                                <li key={index}>
                                    <a className={styles.best_product_list_item}>
                                        <div className={styles.best_img_wrapper}>
                                            <img
                                                src={item.imgUrl}
                                                alt={'img'}
                                            />
                                            <i>四字文案</i>
                                        </div>
                                        <div className={styles.best_text_wrapper}>
                                            <p className={styles.best_text_title}>{item.title}</p>
                                            <p className={styles.best_text_desc}>{item.desc}</p>
                                            <div className={styles.best_text_tag}>
                                                <i>可领券</i>
                                                <i>可领取</i>
                                            </div>
                                            <span className={styles.best_text_price}>¥<b>2999</b>.00</span>
                                            <i className={styles.best_text_comment}>12999人都说好</i>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                    <li>
                        <a className={styles.best_product_list_item}>
                            <div className={styles.best_product_seemore}>
                                <span className={styles.best_product_seemore_arrow}>{'<<'}</span>
                                <span className={styles.best_product_seemore_text}>查看更多</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.qu_motif}>
                <div className={styles.qu_motif_text}>
                    <dl>
                        <dt>趣主题</dt>
                        <dd>上班必买神器</dd>
                        <dd>每满千减百</dd>
                    </dl>
                </div>
                <div className={styles.qu_motif_img}>
                    <img
                        src="http://jdc.jd.com/img/180?color=ffe8e3"
                        alt="lo"
                    />
                </div>
                <div className={styles.qu_motif_text}>
                    <dl>
                        <dt>趣主题</dt>
                        <dd>上班必买神器</dd>
                        <dd>每满千减百</dd>
                    </dl>
                </div>
                <div className={styles.qu_motif_img}>
                    <img
                        src="http://jdc.jd.com/img/180?color=ffe8e3"
                        alt="lo"
                    />
                </div>
            </div>
        </div>
    )
}

/*Title组件*/

const QuTitle:FC<{title:{imgUrl?:string,name:string}}> = (props) => {
    const { title } = props
    return (
        <a className={styles.quproduct_title}>
            <span className={styles.quproduct_title_sectiontitle}>趣好货</span>
            <p className={styles.quproduct_title_desc}>
                {title.imgUrl && <img
                    src={title.imgUrl}
                    alt='qu'
                />}
                <span>{title.name}</span>
                <i className={styles.quproduct_title_arrow}/>
            </p>
        </a>
    )
}

/*品牌特卖*/

const BrandSale = () => {

    const title = {
        // imgUrl: 'http://jdc.jd.com/img/100x70?color=eeeeee',
        name:'今日上新90个特价商品'
    }
    return (
        <div>
            <QuTitle title={title}/>
            <div className={styles.brand_sale}>
                <div className={styles.brand_sale_left}>

                </div>
                <div className={styles.brand_sale_right}>
                    <div className={styles.brand_sale_sub}>

                    </div>
                    <div className={styles.brand_sale_sub}>

                    </div>
                </div>
            </div>

        </div>
    )

}

const JDHomePage: FC<{ data: JDHomeProps }> = ({data}) => {

    const {banner = [], ad_banner = [], navi, cutdown,toutiao,quproduct} = data
    return (
        <div className={styles.jd_container}>
            {/*banner*/}
            <Banner banner={banner}/>

            {/*ad*/}
            <div className={styles.ad_banner}>
                <img
                    src={ad_banner[0]}
                    alt='ad_banner'
                />
            </div>

            {/*navi*/}
            <NavigationZone navi={navi}/>

            {/*cutdown*/}
            <CutDownSale imgUrl={cutdown.imgUrl}/>

            {/*toutiao*/}
            <TouTiao toutiao={toutiao}/>

            {/*趣好货*/}
            <QuProduct quproduct={quproduct}/>

            {/*趣主题*/}
            <BrandSale/>
        </div>
    )
}

export default JDHomePage;


export const getServerSideProps = async () => {
    const response = await httpclient.get('jd')
    return {
        props: {
            data: response.data
        }
    }
}

