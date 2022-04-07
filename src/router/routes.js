import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
export default [
    //主页路由
    {
    path: '/home',
    component: Home,
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
    path: '/login',
    component: Login,
    meta: {
        footerIsShow: false
    }
},
//详情路由
{
    name:'detail',
    path: '/detail/:skuid',
    component: Detail,
    meta: {
        footerIsShow: true
    }
},
//添加购物车成功路由
{
name:'addcartsuccess',
path:'/addcartsuccess',
component:AddCartSuccess,
meta: {
    footerIsShow: true
},
props({query})
{
return {query}
}
},
{
    name:'shopcart',
    path:'/shopcart',
    component:ShopCart,
    meta:{
        footerIsShow:false
    }
},
//没有路径默认返回的路由
{
    path: "*",
    redirect: '/home',
    meta: {
        footerIsShow: true
    }
}
]