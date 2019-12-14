import {debounce} from "./utils"
import BackTop from 'components/content/backTop/BackTop'

export const itemListerMixin={
   
    mounted(){
        // 监听图片加载
        const refresh=debounce(this.$refs.scroll.refresh,200)
        this.itemImgLister=()=>{
          refresh()
        }
        this.$bus.$on('itemImageLoad',this.itemImgLister)
      }
}

export const backTopMixin={
  data(){
    return {
        isShow:false
    }
},
components:{
  BackTop
},
methods:{
    backTop(){
        // this.$refs.scroll  获取ref="scroll"的元素 就可以调用该元素的所有方法
        this.$refs.scroll.scrollTo(0,0)
      }
},
}