<template>
    <div class="cart-list">
        <scroll class="content" ref="scroll">
            <child-list-item v-for="(item,i) in getCartList" 
            :key="i" 
            :product="item"/>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import ChildListItem from './ChildListItem'

import {mapGetters} from 'vuex'

export default {
    components:{
        Scroll,
        ChildListItem
    },
    computed:{
        ...mapGetters(['getCartList'])
    },
    activated(){
        this.$refs.scroll.refresh()
    }
    
}
</script>

<style scoped>
.cart-list{
    height: clac(100% - 44px -49px);
}
.content{
    overflow: hidden;
    position: absolute;
  top: 44px;
  bottom: 98px;
  left: 0;
  right: 0;
}
</style>