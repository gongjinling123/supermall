<template>
    <div class="wrapper">
         <ul class="content">
             <button @click="clickBtn">BB</button>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
             <li>1</li>
         </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll=new BScroll(document.querySelector('.wrapper'),{
            probeType:2,
            pullUpLoad:true, 
        })
        // this.scroll.on('scroll',(position)=>{
        //     console.log(position)
        // })
        this.scroll.on('pullingUp',()=>{
            console.log('上啦加载更多')
            setTimeout(() => {
                this.scroll.finishPullUp()
            }, 2000);
        })
    },
    methods:{
        clickBtn(){
            console.log('-----')
        }
    }
}
</script>

<style scoped>
.wrapper{
    height: 150px;
    background-color: #f7f3;
}
</style>