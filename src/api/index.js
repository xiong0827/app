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
