import {request} from './request'

export function  getDetail(iid) {
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}


// 详情页的推荐部分
export function getRecommend() {
    return request({
        url:'/recommend'
        
    }) 
}

// 将详细信息整合到一个类里面
export class Goods{
    constructor(columns,itemInfo,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.discountBgColor=itemInfo.discountBgColor
        this.price=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discountDesc=itemInfo.discountDesc
        this.columns=columns
        this.services=services
        this.lowNowPrice=itemInfo.lowNowPrice
    }
}

// 将店铺信息整合到一个类中
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans 
        this.sell=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCound=shopInfo.cGoods
    }
}


export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }

export class GoodsCommond{
    constructor(rate){
        this.cRate=rate.cRate;
        this.img=rate.user.avatar;
        this.user=rate.user.uname;
        this.content=rate.content;
        this.style=rate.style;
        this.time=rate.created;
    }
}

