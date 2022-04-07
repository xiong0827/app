import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/Home'
import search from '@/store/Search'
import detail from '@/store/Detail'
import shopCart from '@/store/ShopCart'
import user from '@/store/User'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopCart,
        user
    }

})