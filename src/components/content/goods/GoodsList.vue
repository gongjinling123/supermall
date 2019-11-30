<template>
    <div class="goods-list">
        <goods-item v-for="item in goods" :key="item.iid" :goods-item="item"/>
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