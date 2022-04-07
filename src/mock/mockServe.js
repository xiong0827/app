import Mock from 'mockjs'
//把json格式的引入进来
//json没有暴露 却直接引入了
//webpack默认对外暴露的：图片 json
import banner from './banner.json'
import floor from './floor.json'
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})

