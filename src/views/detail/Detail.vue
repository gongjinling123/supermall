<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="Goods" />
    <detail-shop-info :shop="Shop"/> 
    <detail-goods-info @imageLoad="imageLoad" :detail-info="detailInfo"/>
    <detail-param-info :param-info="paramInfo"/>

    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childDetail/DetailNavBar";
import DetailSwiper from "./childDetail/DetailSwiper";
import DetailBaseInfo from "./childDetail/DetailBaseInfo";
import DetailShopInfo from "./childDetail/DetailShopInfo"; 
import DetailGoodsInfo from "./childDetail/DetailGoodsInfo";
import DetailParamInfo from "./childDetail/DetailParamInfo";

import Scroll from "components/common/scroll/Scroll"

import { getDetail, Goods ,Shop,GoodsParam} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      Goods: {},
      Shop:{},
      detailInfo:{},
      paramInfo:{}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,  
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll
  },
  created() {
    //  保存用户点击的ID
    this.iid = this.$route.params.iid;
    // 根据ID请求数据
    getDetail(this.iid).then(res => {
      console.log(res);
      //    获取顶部轮播图数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
    // 或取商品信息
      this.Goods = new Goods(
        data.columns,
        data.itemInfo,
        data.shopInfo.services
      );
    //   获取店铺信息
    this.Shop=new Shop(data.shopInfo)
    // 获取商品信息
    this.detailInfo=data.detailInfo
    // 获取商品参数 
    this.paramInfo=new GoodsParam(data.itemParams.info, data.itemParams.rule);


    });
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
};
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
}
.detail-nav{
  position: relative;
  z-index: 99;
  background-color: #fff;
}
</style>