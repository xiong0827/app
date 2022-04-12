import {
    reqGoodsInfo,
    reqAddOrUpdateShopCart
} from '@/api'
import uuid from '@/utils/index'
export default {
    namespaced: true,
    actions: {
        async GoodsInfo({
            commit
        }, value) {

            const result = await reqGoodsInfo(value)
            if (result.code == 200) {
                commit('REQGOODSINFO', result.data)
            }
        },
        async AddOrUpdateShopCart(context, {
            skuId,
            skuNum
        }) {
            //加入购物车的请求
            const result = await reqAddOrUpdateShopCart(skuId, skuNum)
            if (result.code == 200) {
                return "ok"
            } else {
                return Promise.reject(new Error('falie'))
            }
        }
    },
    mutations: {
        REQGOODSINFO(state, goodsInfo) {
            state.goodsInfo = goodsInfo
        }
    },
    state: {
        goodsInfo: {},
        uuid: uuid.getUUID()
    },
    getters: {
        categoryView(state) {
            return state.goodsInfo.categoryView || {};
        },
        skuInfo(state) {
            return state.goodsInfo.skuInfo || {}
        },
        spuSaleAttrList(state) {
            return state.goodsInfo.spuSaleAttrList || []
        }
    }
}