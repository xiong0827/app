//所有的api接口统一管理
import requests from '@/api/request'

//三级联动接口
// /api/product/getBaseCategoryList  get 无参数

export const reqCategoryList=()=>{
requests({
    url:"/api/product/getBaseCategoryList",
    method:'get'
})
}