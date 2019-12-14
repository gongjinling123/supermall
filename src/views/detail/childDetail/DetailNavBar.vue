<template>
    <div>
        <nav-bar>
            <div slot="left" @click="back">
                <img src="~assets/img/common/back.svg" class="back">
            </div>
            <div slot="center" class="title"> 
                <div v-for="(item,index) in titles" 
                    :key="item"
                    class="title-item"
                    :class="{active:index===currentIndex}"
                    @click="titleClick(index)">
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    components:{
        NavBar
    },
    methods:{
        titleClick(index){
            this.currentIndex=index
            this.$emit('titleClick',index)
        },
        back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .title{
        display: flex;
        font-size: 12px;
    }
    .title-item{
        flex: 1;
    }
    .active{
        color: var(--color-high-text);
    }
    .back{
        margin-top: 12px;
    }
</style>