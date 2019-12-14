<template>
    <dir class="check-button" :class="{activate:isCheck}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </dir>
</template>

<script>
export default {
    props:{
        isCheck:{
            type:Boolean,
            default:true
        }
    }
}
</script>

<style scoped>
.check-button{
    border-radius: 50%;
    border: 1px solid #aaa;
}
.activate{
    border-color: red;
    background-color: red;
}
</style>