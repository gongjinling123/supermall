import {request} from './request'

export function  getDetail(iid) {
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

// 将详细信息整合到一个类里面
export class Goods{
    constructor(columns,itemInfo,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
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

// 商品参数
// export class GoodsParam{
//     constructor(info,rule){
//         this.image=info.images? info.images[0] :'',
//         this.infos=info.set,
//         this.sizes=rule.tables
//     }
// }
export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }
