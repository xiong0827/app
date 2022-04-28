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

//获取用户地址信息 /api/user/userAddress/auth/findUserAddressList

export const reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:"get"})

//获取订单商品清单
export const reqOrederInfo =()=>requests({url:"/order/auth/trade",method:'get'})

//提交订单的接口
//url"/api/order/auth/submitOrder?tradeNo={tradeNo}

export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})


//获取订单信息
export const reqPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//获取支付状态
///api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus=orderId=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
//获取订单列表
export const reqMyOrderList =(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})