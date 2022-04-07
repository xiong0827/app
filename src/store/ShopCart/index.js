import {
    reqCartList,
    reqDeleteById,
    reqUpdateCheckedById
} from "@/api"

export default {
    namespaced: true,
    actions: {
        async getCarList({
            commit
        }, value) {
            let result = await reqCartList()
            if (result.code == 200) {
                commit("GETCARTLIST", result.data);
            }

        },
        async deleteById({
            commit
        }, skuId) {
            let result = await reqDeleteById(skuId)
            if (result.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error('删除失败'))
            }
        },
        //修改选中状态
        async updateCheckedById({
            commit
        }, {
            skuId,
            isChecked
        }) {
       
            let result = await reqUpdateCheckedById(skuId, isChecked)
            if (result.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error('修改状态失败'))
            }
        },
        //修改所有产品的状态
        changeAllChecked({
            dispatch,
            getters
        }, isChecked) {
            let promiseAll = []
            getters.cartList.cartInfoList.forEach(element => {
                let promise = dispatch('updateCheckedById', {
                    skuId:element.skuId,
                    isChecked
                })
                promiseAll.push(promise)
            })
            return Promise.all(promiseAll)
        },
        //删除所有所选的
        deleteAllCheckedCart({
            dispatch,
            getters
        }) {
            let PromiseAll = []
            getters.cartList.cartInfoList.forEach(element => {
                if (element.isChecked == 1) {
                    let promise = dispatch('deleteById', element.skuId)
                    PromiseAll.push(promise)
                }
            });
            return Promise.all(PromiseAll)
        }
    },
    mutations: {
        GETCARTLIST(state, cartList) {
            state.cartList = cartList;
        },
    },
    state: {
        cartList: [],
    },
    getters: {
        cartList(state) {

            return state.cartList[0] || {}
        },
    }
}