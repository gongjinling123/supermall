<template>
    <div class="commend">
        <div v-for="item in recommends" :key="item.title" class="commend-item">
            <a :href="item.link">
                <img :src="item.image">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
     props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
}
</script>

<style scoped>
    .commend{
        display: flex;
        width: 100%;
        font-size: 12px;
        text-align: center;
        padding: 15px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .commend-item{
        flex: 1;
    }
    .commend-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>
