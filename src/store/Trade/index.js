import {
    reqAddressInfo,
    reqOrederInfo
} from '@/api'
export default {
    namespaced: true,
    actions: {
        async getAddressInfo({
            commit
        }) {
            let result = await reqAddressInfo()
            if (result.code == 200) {
                commit('GETADDRESSINFO', result.data)
                return 'ok'
            } else {
                return Promise.reject(new Error('flie'))
            }
        },
        //获取订单商品详情
        async getOrederInfo({
            commit
        }) {
            let result = await reqOrederInfo()
            if (result.code == 200) {
                commit('GETOREDERINFO', result.data)
            }
        }
    },
    mutations: {
        GETADDRESSINFO(state, AddressInfo) {
            state.AddressInfo = AddressInfo
        },
        GETOREDERINFO(state, OrderInfo) {
            state.OrderInfo = OrderInfo
        }
    },
    state: {
        AddressInfo: {} ,
        OrderInfo: {}
    },
    getters: {

    }
}