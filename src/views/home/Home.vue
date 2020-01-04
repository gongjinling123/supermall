<template>
  <div id="home">
    <nav-bar class="nav-home"> <div slot="center">购物中心</div> </nav-bar>

     <tab-control :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="fixed"
      v-show="isFixedTop"/>

    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    @scroll="contentScroll"
    :pull-up-load="true"
    @pullingUp="loadMore"
     >
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
    <home-recommend-view :recommends="recommends" />
    <home-feature-view />
      <tab-control :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backTop" v-show="isShow"/>

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
// import BackTop from 'components/content/backTop/BackTop'

import {itemListerMixin,backTopMixin} from 'components/common/mixin'

import { getHomeMultidata, getHomeGoods } from "network/home"; 
// import {debounce} from 'common/utils'

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
      currentType:'pop',
      // isShow:false,
      isLoad:false,
      isFixedTop:false,
      controlTop:0,
      saveY:0,
      itemImgLister:null
    };
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  computed:{
      showGoods(){
          return this.goods[this.currentType].list
      }
  },
  destroyed(){
    console.log(' Home 销毁')
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh() 
  },
  deactivated(){
    this.saveY=this.$refs.scroll.getScrollY()

    // 取消全局时间监听
    this.$bus.$off('itemImageLoad',this.itemImgLister)
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
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl2.currentIndex=index
      },
      
      contentScroll(position){
        // 监听返回顶部
        this.isShow=(-position.y) > 1000
        // 监听滚动，吸顶效果
        this.isFixedTop=(-position.y)>this.controlTop
      },
      loadMore(){
        this.HomeGoods(this.currentType) 
      },
      swiperImageLoad(){
        if(!this.isLoad){
          this.controlTop=this.$refs.tabControl2.$el.offsetTop
          this.isLoad=true
        }
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

        this.$refs.scroll.finishPullUp()
      });
    }
  },
 mixins:[itemListerMixin,backTopMixin],
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.nav-home {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;

/* 默认的滚动样式时，防止顶部导航栏随着页面滚动 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
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
.fixed{
  position: relative;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>