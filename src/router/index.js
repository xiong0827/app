import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

let originPush = VueRouter.prototype.push

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve || reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}

export default new VueRouter({
    routes: [{
            path: '/home',
            component: Home,
            meta: {
                footerIsShow: true
            }
        },
        {
            name: 'search',
            path: '/search/:key?',
            component: Search,
            meta: {
                footerIsShow: true
            },
            props({
                query,
                params
            }) {
                return {
                    query
                }
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                footerIsShow: false
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                footerIsShow: false
            }
        },
        {
            path: "*",
            redirect: '/home',
            meta: {
                footerIsShow: true
            }
        }
    ]
})