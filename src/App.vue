<template>
  <div id="app">
<!--
      //路由匹配到的组件在这一处显示
-->
<!--
      //导入得导航栏组件
-->
<!--  当外层嵌入keep-alive是会使路由视图保持原本状态
        而不是destoryANDcreate 并且会产生antivated和deactivated  -->
      <keep-alive>
          <router-view/>
      </keep-alive>
      <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabbar/MainTabBar";


  export default {
    name: 'app',
    components :{
      MainTabBar
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
</style>

