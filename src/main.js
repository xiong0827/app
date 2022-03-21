import Vue from 'vue'
import App from '@/App.vue'
//全局组件安装在componets中
import TypeNav from '@/components/TypeNav'
//引入轮播图全局组件
import Carousel from '@/components/Carousel'
import store from '@/store'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
//引入mock模拟数据
import '@/mock/mockServe'
//引入路由
import router  from '@/router'
import 'swiper/css/swiper.css'
const vm=new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
console.log(vm);
