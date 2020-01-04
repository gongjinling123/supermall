<template> 
    <div class="profile">
        <nav-bar class="nav-bar">
            <div slot="center">个人中心</div>
        </nav-bar>
        <scroll class="content">
           <login/>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'

import Login from './childPrifile/Login'
export default {
    components:{ 
        Scroll,
        NavBar,
        Login
    }
}
</script>

<style scoped>
.profile{
    width: 100%;
    height: 100%;
}
.nav-bar{
    font-weight: 600;
    color: #fff;
    background: var(--color-tint);
}
.content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>