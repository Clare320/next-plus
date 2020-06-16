const JD_Data = {
    //banner
    banner: [
        'http://jdc.jd.com/img/750x340',
        'http://jdc.jd.com/img/750x340',
        'http://jdc.jd.com/img/750x340'
    ],
    ad_banner: [
        "http://jdc.jd.com/img/750x100?color=eeeeee"
    ],
    navi:[
        {
            imgUrl:'http://jdc.jd.com/img/80',
            naviName:'导航入口'
        },
        {
            imgUrl:'http://jdc.jd.com/img/80',
            naviName:'导航入口'
        },
        {
            imgUrl:'http://jdc.jd.com/img/80',
            naviName:'导航入口'
        },
        {
            imgUrl:'http://jdc.jd.com/img/80',
            naviName:'导航入口'
        },
        {
            imgUrl:'http://jdc.jd.com/img/80',
            naviName:'导航入口'
        }
    ],
    cutdown: {
        imgUrl: 'http://jdc.jd.com/img/750x286?color=eeeeee',
        time:1591248196,
    },
    toutiao: [
        {
            tag:'拼便宜',
            title:'海南木瓜最低价 富含维生素C抗氧化',
            people:4,
            price:'9.9'
        },
        {
            tag:'拼便宜',
            title:'海南木瓜最低价 富含维生素C抗氧化',
            people:4,
            price:'9.9'
        },
        {
            tag:'拼便宜',
            title:'海南木瓜最低价 富含维生素C抗氧化',
            people:4,
            price:'9.9'
        }
    ],
    quproduct:{
        title:{
            imgUrl: 'http://jdc.jd.com/img/100x70?color=eeeeee',
            name:'今日上新90个特价商品'
        },
        best:[
            {
                imgUrl:'http://jdc.jd.com/img/260',
                title:'三星笔记本散热快',
                desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
                price:2999.00,
                commonNum:129999
            },
            {
                imgUrl:'http://jdc.jd.com/img/260',
                title:'三星笔记本散热快',
                desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
                price:2999.00,
                commonNum:129999
            }
        ]
    },
    qumodtif: [
        {
            title: '趣主题',
            desc: '上班必买神器\n每满千减百',
            imgUrl:'http://jdc.jd.com/img/180?color=ffe8e3'
        },
        {
            title: '趣主题',
            desc: '上班必买神器\n每满千减百',
            imgUrl:'http://jdc.jd.com/img/180?color=ffe8e3'
        }
    ]

}

export default (_req:any, res:any) => {
    res.statusCode = 200
    res.json(JD_Data)
}
