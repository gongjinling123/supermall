<template>
  <div>
    <tabbar>
      <tabbar-item path="/home">
        <img slot="tab-bar-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="tab-bar-icon-active" src="~assets/img/tabbar/home_active.svg" />
        <div slot="tab-bar-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="tab-bar-icon" src="~assets/img/tabbar/category.svg" />
        <img slot="tab-bar-icon-active" src="~assets/img/tabbar/category_active.svg" />
        <div slot="tab-bar-text">分类</div>
      </tabbar-item>
      <tabbar-item path="cart">
        <img slot="tab-bar-icon" src="~assets/img/tabbar/cart.svg" />
        <img slot="tab-bar-icon-active" src="~assets/img/tabbar/cart_active.svg" />
        <div slot="tab-bar-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="profile">
        <img slot="tab-bar-icon" src="~assets/img/tabbar/profile.svg" />
        <img slot="tab-bar-icon-active" src="~assets/img/tabbar/profile_active.svg" />
        <div slot="tab-bar-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import "assets/css/base.css";
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";

export default {
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style scoped>
</style>
