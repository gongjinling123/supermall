<template>
    <div class="wrapper">
        <nav-bar class="nav-bar">
            <div slot="center">商品分类</div>
        </nav-bar>
        <div class="contain">
            <!-- 菜单 -->
            <category-menu 
            :categories="categories" 
            @itemClick="itemClick"
            />
        </div>
        <scroll id="tab-content">
            <div>
                <tab-content-category :subcategorys="subcategorys"/>
            </div>
        </scroll>
    </div>
</template>

<script> 
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"

import CategoryMenu from "./childComponents/CategoryMenu"
import TabContentCategory from "./childComponents/TabContentCategory"


import {getCategory,getSubcategory} from 'network/category'

export default {
    data(){
        return {
            categories:[],
            subcategorys:[],
            currentIndex:0,
            curMiniWallkey: "10062603",
            keyList:[],
            keyList2:[],
            dataList:[]
        }
    },
    components:{
        NavBar,
        CategoryMenu,
        TabContentCategory,
        Scroll
    },
  
    methods:{
        itemClick({maitKey,miniWallKey,index}){
            this.curMiniWallkey=miniWallKey
            this.currentIndex=index
            if(this.keyList.includes(miniWallKey) && 
            this.keyList2.includes(maitKey)
            ){
                this.subcategorys=this.dataList[index]
            } else{
                this.getSubcategory(maitKey,index)
            }
        },
        getCategory(){
            getCategory().then(res=>{
                console.log(res.data.category.list)
                this.categories=res.data.category.list
                // 初始化请求第一条数据，并且给数组赋值第一个默认值
                if(this.categories.length>0){
                    this.getSubcategory(this.categories[0].maitKey,0)
                }
            });
        },
        getSubcategory(key,index){
            getSubcategory(key).then(res=>{
                // console.log(res.data.list)
                this.dataList[index]=res.data.list
                if(this.dataList.length>1){
                    this.subcategorys=this.dataList[index]
                }else{
                    this.subcategorys=this.dataList[0]
                }
            })
        }
    },
    created(){
        this.getCategory()
    }
}
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color: #fff;
}
#tab-content{
    position: fixed;
    left: 100px;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
}
</style>