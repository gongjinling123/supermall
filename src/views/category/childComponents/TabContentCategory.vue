<template>
    <div class="category">
         <div 
         v-for="(item,index) in subcategorys" 
         :key="index"
         class="category-item">
             <a :href="item.link"><img :src="item.image"/></a>
             <p>{{item.title}}</p>
         </div>
    </div>
</template>

<script>
 
export default {
    components:{
         
    },
    props:{
        subcategorys:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.category{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
}
.category-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 100px;
    margin-bottom: 10px;
}
.category-item img{
    width: 65px;
    margin-bottom: 6px;
}
.category-item p{
    font-size: 14px;
}
</style>
