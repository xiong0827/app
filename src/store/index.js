import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/Home'
import search from '@/store/Search'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        home,
        search
    }

})