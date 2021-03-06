import {
    reqGetCode,
    reqUserRegister,
    reqUserLogin,
    reqGetUserInfo,
    reqLogout
} from "@/api"
import {
    setToken,
    getToken,
    removeToken
} from "@/utils/token";
export default {
    namespaced: true,
    actions: {
        //获取验证码
        async getCode({
            commit
        }, phone) {
            console.log(phone);
            let result = await reqGetCode(phone)

            if (result.code == 200) {
                commit('GETCODE', result.data)
            }
        },
        //注册账户
        async userRegister({
            commit
        }, data) {
            let result = await reqUserRegister(data)
            if (result.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error('flie'))
            }
        },
        //用户登录
        async userLogin({
            commit
        }, data) {
            let result = await reqUserLogin(data)
            if (result.code == 200) {
                commit('USERLOGIN', result.data.token)
                setToken(result.data.token)
                return 'ok'
            } else {
                return Promise.reject(new Error('登录失败'))
            }
        },
        //获取用户信息
        async getUserInfo({
            commit
        }) {
            let result = await reqGetUserInfo()
            if (result.code == 200) {
                commit('USERINFO', result.data)
                return 'ok'
            } else {
                return
            }
        },
        async logOut({
            commit
        }) {
            let result = await reqLogout()
            if (result.code == 200) {
                console.log(1);
                commit('LOGOUT')
                return 'ok'
            } else {
                return Promise.reject(new Error('退出失败'))
            }
        }
    },
    mutations: {
        GETCODE(state, code) {
            state.code = code
        },
        USERLOGIN(state, token) {
            state.token = token
        },
        USERINFO(state, userInfo) {
            state.userInfo = userInfo
        },
        // 退出登录
        LOGOUT(state) {
            state.token = ''
            state.userInfo = {},6
                removeToken()
        }
    },
    state: {
        code: '',
        token: getToken(),
        userInfo: {}
    },
    getters: {}
}