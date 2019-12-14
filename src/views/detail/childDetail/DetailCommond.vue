<template>
    <div v-if="Object.keys(detailCommond).length !== 0" class="commond">
        <div class="header">
            <div class="header-title">
                用户评论
            </div>
            <div class="header-more">
                <span>更多</span>
                <span>&gt;</span>
            </div>
        </div>
        <div class="commond-user">
            <img :src="detailCommond.img" alt="">
            <span>{{detailCommond.user}}</span>
        </div>
        <p>{{detailCommond.content}}</p>
        <div class="size">
            <span>{{detailCommond.time | formatDate}}</span>
            <span>{{detailCommond.style}}</span>
        </div>
    </div>
</template>

<script>
import {formatDate} from "components/common/utils"
export default {
    name:"DetailCommond",
    props:{
        detailCommond:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {}
    },
    filters: {
      formatDate(time) {
        time = time * 1000
        let date = new Date(time)
        // console.log(new Date(time))
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    }

}
</script>

<style scoped>
.commond {
    padding: 25px 8px; 
    border-bottom: 5px solid #f2f5f8;
  }
  .commond-user {
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }
.commond-user img{
    width: 42px;
    height: 42px;
}
.commond-user span{
     margin-left: 10px;
    vertical-align: center;
}
.commond p{
    margin-top: 15px;
    font-size: 16px;
}
.commond .size{
    margin-top: 10px;
    font-size: 14px;
    color: #ccc;
}
.commond .size span {
    margin-right: 15px;
}
.header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}
.header .header-title{
    float: left;
    font-size: 15px;
}
.header .header-more{
    float: right;
    font-size: 15px;
    
}
.header .header-more span{
    margin-left: 10px;
}
</style>