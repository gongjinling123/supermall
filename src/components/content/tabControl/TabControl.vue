<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles"
         :key="item.title"
         :class="{active:index===currentIndex}"
         class="tab-control-item"
         @click="tabItem(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        tabItem(index){
            this.currentIndex=index,
            this.$emit('tabClick',index)
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        z-index: 10;
    }
    .tab-control-item{
        flex: 1;
    }
    .tab-control-item span{
        padding: 5px;
    }
    .active{
        color:var(--color-high-text);
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>
