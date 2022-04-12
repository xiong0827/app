import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'
import store from '@/store'
let originPush = VueRouter.prototype.push

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve || reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {
            y: 0
        }
    },
})
router.beforeEach((to, from, next) => {
    if (store.state.user.token) {
        if (to.name == 'login') {
            next(false)
        }
        else{
            next()
        }
    }
    else{
        next()
    }
   

})

export default router