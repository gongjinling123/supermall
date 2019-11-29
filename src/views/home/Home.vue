<template>
    <div id="home">
       <nav-bar class="nav-home">
           <div slot="center">购物中心</div>
       </nav-bar>
       <home-swiper :banners="banners"></home-swiper>
       <home-recommend-view :recommends="recommends"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'

import {getHomeMultidata} from 'network/home'

export default {
    data(){
        return {
            banners:[],
            recommends:[]
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommendView
    },
    created(){
        getHomeMultidata().then(res => { 
            this.banners=res.data.banner.list,
            this.recommends=res.data.recommend.list
        })
    }
}
</script>

<style scoped>
    .nav-home{
       background-color: var(--color-tint);
       color: #fff;
    }
</style>