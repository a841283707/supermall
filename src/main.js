import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
//关闭生产提示
Vue.config.productionTip = false

new Vue({
  //注册的路由对象会存在于每个组件
  router,
  render: h => h(App)
}).$mount('#app')
