import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySeccuss from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
import store from '@/store'
//路由懒加载

export default [
    //主页路由
    {
        path: '/home',
        component: ()=> import('@/pages/Home'),
        
        meta: {
            footerIsShow: true
        }
    },
    //搜索页路由
    {
        name: 'search',
        path: '/search/:keyword/',
        component: Search,
        meta: {
            footerIsShow: true
        },
        props({
            query,
            params
        }) {
            return {
                query,
                params
            }
        }
    },
    //注册页路由
    {
        path: '/register',
        component: Register,
        meta: {
            footerIsShow: false
        }
    },
    //登录页路由
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            footerIsShow: false
        }
    },
    //详情路由
    {
        name: 'detail',
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            footerIsShow: true
        }
    },
    //添加购物车成功路由
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: {
            footerIsShow: true
        },
        props({
            query
        }) {
            return {
                query
            }
        }
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: ShopCart,
        meta: {
            footerIsShow: false
        }
    },
    //结算页路由
    {
        name: 'trade',
        path: '/trade',
        component: Trade,
        meta: {
            footerIsShow: false
        },
        beforeEnter: (to, from, next) => {
            if (from.name == 'shopcart' && store.state.user.token) {

                next()
            } else {
                console.log(1);
                next(false)
            }


        },
    },
    {
        name: 'pay',
        path: '/pay',
        component: Pay,
        meta: {
            footerIsShow: false
        },
        beforeRouteEnter(to, from, next) {
            if (from.path == "/trade") {
                next()
            } else {
                next(false)
            }
        },
        props({
            query
        }) {
            return {
                orderId: query.orderId,
                totalAmount: query.totalAmount
            }
        },
        children: [

        ]
    },
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: PaySeccuss,
        meta: {
            footerIsShow: false
        },
    },
    //支付成功路由
    //个人中心路由
    {
        name: 'center',
        path: '/center',
        redirect: 'center/myorder',
        component: Center,
        meta: {
            footerIsShow: true
        },

        children: [{
                path: 'myorder',
                component: MyOrder
            },
            {
                path: 'groupOrder',
                component: GroupOrder
            },
            {
                path: '/center',
                redirect: 'center/myorder'
            }
        ]

    },
    //没有路径默认返回的路由
    {
        path: "*",
        redirect: '/home',
        meta: {
            footerIsShow: true
        }
    },


]