<template>
    <div class="shop-item">
        <div class="item-selector">
            <check-button :is-check="product.checked" @click.native="checkClick"/>
        </div>
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>
        <div class="item-info">
            <div class="title">{{product.title}}</div>
            <div class="desc">{{product.desc}}</div>
            <div class="info-bottom">
                <div class="price left">￥{{product.price}}</div>
                <div class="count right">X{{product.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        CheckButton
    },
    methods:{
        checkClick(){
            // console.log(this.product.checked)
            this.product.checked=!this.product.checked
        }
    }
}
</script>

<style scoped>
.shop-item{
    display: flex;
    width: 100%;
    padding: 5px;
    font-size: 0;
    border-bottom: 1px solid #ccc;
}
.item-selector{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.shop-item .item-img{
    padding: 5px;
}
.shop-item .item-info{
    font-size: 17px;
    color: #333;
    overflow: hidden;
    padding: 5px 10px;
    position: relative;
}
.item-info .title,
.item-info .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-info .desc{
    font-size: 14px;
    margin-top: 15px;
    color: #666;
}
.item-img img{
    display: block;
    width: 80px;
    height: 100px;
    border-radius: 5px;
}
.info-bottom{
    position: absolute;
    margin-top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
}
.info-bottom .price{
    color: orangered;
}
</style>