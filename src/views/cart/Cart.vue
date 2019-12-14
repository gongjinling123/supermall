<template>
    <div>
        <!-- 顶部 -->
       <nav-bar class="nav-bar">
           <div slot="center">购物车({{getCartLength}})</div>
       </nav-bar>

       <!-- 列表 -->
       <cart-list/>

       <!-- 底部 -->
       <cart-bottom-bar/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComponents/CartList'
import CartBottomBar from './childComponents/CartBottomBar'

import {mapGetters} from 'vuex'
export default {
    components:{
        NavBar,
        CartList,
        CartBottomBar
    },
    computed:{
        ...mapGetters(['getCartLength'])
    }
}
</script>

<style scoped>

.nav-bar{
    background: var(--color-tint);
    color: #fff;

}
</style>