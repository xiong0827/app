import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/pages/Home/TypeNav'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
//引入路由
import {reqCategoryList}  from '@/api'
reqCategoryList();
import router  from '@/router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
