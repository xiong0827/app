import {
    reqCategoryList,
    reqCatBannerList,
    reqFloorList
} from "@/api";

export default {

    actions: {
        async categoryList({
            commit
        }, value) {
            let result = await reqCategoryList();
            if (result.code == 200) {
                commit('CATEGORYLIST', result.data)
            }
        },
        async bannerList({
            commit
        }, value) {
            let result = await reqCatBannerList();
            if (result.code == 200) {
                commit('BANNERLIST', result.data)
            }
        },
        async reqFloorList({
            commit
        }, value) {
            let result = await reqFloorList();
            if (result.code == 200) {
                commit('REQFLOORLIST', result.data)
            }
        }
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        },
        BANNERLIST(state, bannerList) {
            state.bannerList = bannerList
        },
       REQFLOORLIST(state, floorList) {
            state.floorList = floorList
        }
    },
    state: {
        categoryList: [],
        bannerList: [],
        floorList: []
    },
    getters: {

    }
}