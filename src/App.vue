<template>
  <div id="app">
    <router-view/>
   <main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from 'components/content/MainTabbar/MainTabbar'
export default {
  name: 'app',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import 'assets/css/base.css'
</style>
