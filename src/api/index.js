//所有的api接口统一管理
import requests from '@/api/request'
import mockAjax from '@/api/mockAjax'
import { method } from 'lodash';

//三级联动接口
// /api/product/getBaseCategoryList  get 无参数
export const reqCategoryList = () =>  requests({url: "/product/getBaseCategoryList",method: 'get'});
//获取banner轮播图
export const reqCatBannerList=()=> mockAjax({url:'/banner',method:'get'})
//floor数据
export const reqFloorList=()=>mockAjax({url:'/floor',method:'get'})
//获取搜索模块数据 地址/api/list 请求方式：post 
export const reqGetSearchInfo=params=> requests({url:'/list',method:'post',data:params})
//获取商品详情 地址/api/item/{ skuId }
export const reqGoodsInfo=skuId=>requests({url:`/item/${skuId}`,method:'get'})
//产品添加到购物车中(获取)
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId }/${skuNum}`, method:'post'})
//获取购物车
export const reqCartList=()=>requests({url:"/cart/cartList",method:"get"})
//删除购物车产品
export const reqDeleteById=skuId=>requests({url:`/cart/deleteCart/${skuId}`,method:'DELETE'})
//修改商品状态
// /cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedById=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//获取验证码
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//注册账号
///api/user/passport/register
export const reqUserRegister=data=>requests({url:"/user/passport/register",method:"post",data})
//登录账号
///api/user/passport/login
export const reqUserLogin=data=>requests({url:'/user/passport/login',data,method:'post'})

//获取用户信息dai/user/passport/auth/getUserInfo
export const reqGetUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:"get"})

//退出登录 /api/user/passport/logout
export const reqLogout =()=>requests({url:'/user/passport/logout',method:"get"})
