<template>
  <div id="app">
<!--
      //路由匹配到的组件在这一处显示
-->
      <router-view/>
<!--
      //导入得导航栏组件
-->
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
<!--<template>
    <div id="app" class="wrapper">
        <router-view/>
        <main-tab-bar/>
    </div>
</template>

<script>
    import MainTabBar from './components/content/mainTabbar/MainTabBar'

    export default {
        name: 'app',
        components: {
            MainTabBar
        }
    }
</script>

<style>
    @import "assets/css/base.css";
</style>-->

