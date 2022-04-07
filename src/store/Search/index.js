import {
    reqGetSearchInfo
} from '@/api/index'
export default {
    namespaced: true,
    actions: {
        async getSearchInfo({
            commit
        }, value) {
            let result = await reqGetSearchInfo(value);
            if (result.code == 200) {
                commit('GETSEARCHINFO', result.data)
            }
        }
    },
    mutations: {
        GETSEARCHINFO(state, SearchInfo) {
            state.SearchInfo = SearchInfo
        }
    },
    state: {
        SearchInfo: []
    },
    getters: {
        goodsList(state) {
            return state.SearchInfo.goodsList || []
        },
        attrsList(state) {

                return state.SearchInfo.attrsList || []
        },
        trademarkList(state) {
    
                return state.SearchInfo.trademarkList || []
           
        },
        total(state)
        {
            return state.SearchInfo.total
        }
    }
}