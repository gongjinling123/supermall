<template>
    <div class="login">
       <van-uploader :after-read="afterRead">
      <div class="user-pic">
        <van-image :src="defaultPic" class="user-pic-img" fit="cover" round />
      </div>
    </van-uploader>
    </div>
</template>

<script>
export default {
    data(){
        return {
            defaultPic:require("@/assets/img/profile/user.png")
        }
    },
    methods:{
        afterRead(file) {
      console.log(file);
      this.defaultPic = file.content;
      localStorage.setItem("user_pic", JSON.stringify(this.defaultPic));
    }
    }
}
</script>

<style scoped>
.login{
    position: relative;
    display: flex;
    align-items: center;
    background: var(--color-tint);
    width: 100%;
    height: 90px;
    padding: 0 20px;
}
.user-pic{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.user-pic .user-pic-img{
    display: block;
    width: 60px;
    height: 60px;
}
</style>