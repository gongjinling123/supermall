<template>
    <div class="goods-list">
        <goods-item v-for="(item,i) in goods" :key="i" :goods-item="item"/>
    </div>
</template>

<script>
import GoodsItem from './GoodsListItem'
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsItem
    }
}
</script>

<style scoped>
.goods-list{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>