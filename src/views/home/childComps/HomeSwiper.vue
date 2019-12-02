<template>
    <swiper>
           <swiper-item v-for="(item,i) in banners" :key="i">
               <a :href="item.link">
                   <img :src="item.image" @load="loadImage">
               </a>
           </swiper-item>
       </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        SwiperItem,
        Swiper
    },
    methods:{
        loadImage(){
            this.$emit('swiperImageLoad')
        }
    }
}
</script>

<style scoped>

</style>
