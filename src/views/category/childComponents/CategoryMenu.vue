<template>
    <scroll id="top-menu">
        <div class="menu-list"  v-for="(item,index) in categories"  :key="index">
            <div class="menu-list-item" 
            :class="{active:index==currentIndex}"
            @click="itemClick(item,index)"
            >
                {{item.title}}
            </div>
        </div>
    </scroll>
</template>

<script>
 import Scroll from 'common/scroll/Scroll'
export default {
    data(){
        return {
            currentIndex:0
        }
    },
    components:{
        Scroll
    },
    props:{
        categories:{
            type:Array,
            default(){
                return []
            }
        }
    },
     methods: {
		itemClick(item,index) {
            const obj={
                maitKey:item.maitKey,
                miniWallKey:item.miniWallKey,
                index
            }
        this.currentIndex=index;
        this.$emit("itemClick",obj)
      }
    }
    
}
</script>

<style scoped>
#top-menu{
   overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
    width: 100px; 
    background-color: #f6f6f6;
    box-sizing: border-box;
}
.menu-list-item{
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    text-align: center;
}
.menu-list-item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
}
</style>