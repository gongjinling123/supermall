<template>
  <div id="home">
    <nav-bar class="nav-home"> <div slot="center">购物中心</div> </nav-bar>

    <scroll class="content" ref="scroll">
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends" />
    <home-feature-view />
      <tab-control class="tab-control" :titles="['流行','新款','精选']"
      @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backTop"/>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from 'components/content/backTop/BackTop'

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
    //   默认渲染 pop 流行页面的数据
      currentType:'pop'
    };
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed:{
      showGoods(){
          return this.goods[this.currentType].list
      }
  },
  created() {
    //   请求更多数据
    this.HomeMultidata();

    // 请求商品数据
    this.HomeGoods("pop");
    this.HomeGoods("new");
    this.HomeGoods("sell");
  },
  methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index){
        //   console.log(index)
        switch(index){
            case 0:
                this.currentType='pop'
                break
            case 1:
                this.currentType='new'
                break
            case 2:
                this.currentType='sell'
                break
        }
      },
      backTop(){
        this.$refs.scroll.scroll.scrollTo(0,0,2000)
      },
    /**
     * 网络请求相关的方法
     */
    HomeMultidata() {
      getHomeMultidata().then(res => {
         this.banners = res.data.banner.list,
           this.recommends = res.data.recommend.list;
      });
    },
    HomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.nav-home {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content{
  /* height: 300px;   */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>