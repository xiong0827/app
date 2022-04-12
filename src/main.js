import Vue from 'vue'
import App from '@/App.vue'
//全局组件安装在componets中
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
//引入轮播图全局组件
import Carousel from '@/components/Carousel'

Vue.component(Carousel.name,Carousel)
//引入分页器全局组件
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
//引入vuex
import store from '@/store'
Vue.config.productionTip = false
Vue.config.devtools = true
//引入mock模拟数据
import '@/mock/mockServe'
//引入路由
import router  from '@/router'
import 'swiper/css/swiper.css'
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
 Vue.prototype.$bus=this
  }
}).$mount('#app')

