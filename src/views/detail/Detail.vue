<template>
  <div id="detail">
    
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="Goods" />
      <detail-shop-info :shop="Shop" />
      <detail-goods-info @imageLoad="imageLoad" :detail-info="detailInfo" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-commond ref="commond" :detail-commond="Commond" />
      <goods-list ref="recommend" :goods="recommend" />
    </scroll>
    <detail-botton-bar @addToCart="addToCart"/>
    <back-top @click.native="backTop" v-show="isShow" /> 
  </div>
</template> 
 
<script>
import DetailNavBar from "./childDetail/DetailNavBar";
import DetailSwiper from "./childDetail/DetailSwiper";
import DetailBaseInfo from "./childDetail/DetailBaseInfo";
import DetailShopInfo from "./childDetail/DetailShopInfo";
import DetailGoodsInfo from "./childDetail/DetailGoodsInfo";
import DetailParamInfo from "./childDetail/DetailParamInfo";
import DetailCommond from "./childDetail/DetailCommond";
import DetailBottonBar from "./childDetail/DetailBottonBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList"; 
// import {debounce} from "components/common/utils"
import { itemListerMixin ,backTopMixin} from "components/common/mixin";

import {mapActions} from 'vuex'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  GoodsCommond,
  getRecommend
} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      Goods: {},
      Shop: {},
      detailInfo: {},
      paramInfo: {},
      Commond: {},
      recommend: [],
      itemImgLister: null,
      themeTopYs: [],
      currentIndex: 0
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommond,
    DetailBottonBar,
    Scroll,
    GoodsList, 
  },
  created() {
    //  1、保存用户点击的ID
    this.iid = this.$route.params.iid;

    // 2、根据ID请求数据
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
      this.Shop = new Shop(data.shopInfo);
      // 获取商品信息
      this.detailInfo = data.detailInfo;
      // 获取商品参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 当有评论信息时获取商品评论
      if (data.rate.cRate !== 0) {
        this.Commond = new GoodsCommond(data.rate.list[0]);
      }
    });

    // 3、推荐信息
    getRecommend().then(res => {
      this.recommend = res.data.list;
    });
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh();

      // 获取offsetTop
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.commond.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs)
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      // console.log(-position.y)
      let positionY=-position.y
      for (var i = 0; i < this.themeTopYs.length; i++) {
        var length = this.themeTopYs.length;
        if (
          (this.currentIndex !== i &&
            (i < length - 1 &&
              positionY >= this.themeTopYs[i] &&
              positionY < this.themeTopYs[i + 1]))
        ) {
          // console.log(i);
          this.currentIndex = i;
          this.$refs.nav.currentIndex=this.currentIndex
        }
      }
       // 监听返回顶部
        this.isShow=(-position.y) > 1000
        // 监听滚动，吸顶效果
        this.isFixedTop=(-position.y)>this.controlTop

    },
    addToCart(){
      // 1.获取购物车需要展示的信息
      const product={}
      product.image=this.topImages[0]
      product.title=this.Goods.title
      product.desc=this.Goods.desc
      product.price=this.Goods.lowNowPrice
      product.iid=this.iid

      // 2.将商品添加到购物车
      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res)
      // })
      this.addCart(product).then(res=>{
        this.$toast.show(res,2000)
      })
    }
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgLister);
  },
  mixins: [itemListerMixin,backTopMixin]
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
}
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.detail-nav {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
</style>