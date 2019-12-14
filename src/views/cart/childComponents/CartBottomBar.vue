<template>
    <div class="bottom-bar">
        <div class="select">
            <check-button class="all-check" @click.native="clickAll" :is-check="allSelect"/>
            <div class="text">全选</div>
        </div>
        <div class="price">
            总价：{{totalPrice}}
        </div>
        <div @click="goPay" class="count">
            去结算({{count}})
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    components:{
        CheckButton
    },
    computed:{
        totalPrice(){
            return '￥'+this.$store.state.cartList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue+item.price*item.count
            },0).toFixed(2)
        },
        count(){
            return this.$store.state.cartList.filter(item=>{
                return item.checked
            }).reduce((preCount,item)=>{
                return preCount+item.count
            },0)
        },
        allSelect(){
            if(this.$store.state.cartList.length===0) return false

            for(let item of this.$store.state.cartList){
                if(!item.checked){
                    return false
                }
            }
            return true
        }
    },
    methods:{
        clickAll(){
           if(this.allSelect){
            //    全部选中
            this.$store.state.cartList.forEach(item=>item.checked=false)
           } else {
            //    有部分或全部选中
            this.$store.state.cartList.forEach(item=>item.checked=true)
           }
        },
        goPay(){
            if(!this.allSelect){
                this.$toast.show('请选择商品',2000)
            }
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    height: 49px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    line-height: 49px;
    font-size: 14px;
    color: #888;
    padding-left: 35px;
    box-sizing: border-box;
    display: flex;
}
.select{
    display: flex;
    align-items: center;
}
.all-check{
    width: 20px;
    height: 20px;
    line-height: 20px;
}
.select .text{
    margin-left: 8px;
}
.price{
    margin-left: 20px;
    flex: 1;
}
.count{
    width: 100px;
    background: green;
    color: #fff;
    text-align: center;
}
</style>