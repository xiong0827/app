import Vue from 'vue'
import App from '@/App.vue'
import { Button, MessageBox } from 'element-ui';
//全局组件安装在componets中
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
//引入轮播图全局组件
import Carousel from '@/components/Carousel'
//引入element-ui
Vue.component(Button.name,Button)
Vue.component(Carousel.name,Carousel)
//引入分页器全局组件
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入vuex
import store from '@/store'
Vue.config.productionTip = false
Vue.config.devtools = true
//引入mock模拟数据
import '@/mock/mockServe'
//引入路由
import router  from '@/router'
import 'swiper/css/swiper.css'
// 引入懒加载图片
import lazyload from 'vue-lazyload'
Vue.use(lazyload,{

})

//引入自定义插件
import myPlugins from './plugins';
Vue.use(myPlugins,{
  name:'upper'
})
import * as API from '@/api'
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
 Vue.prototype.$bus=this
 Vue.prototype.$API=API;
  }
}).$mount('#app')

