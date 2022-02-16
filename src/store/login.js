
import { getCookie } from '@/utils/util'
let userId = getCookie('df_user_id')
let merchant_token = getCookie('merchant_token') 
let nickname = sessionStorage.getItem('nickname')
const state = {
  logged: !merchant_token,
  userId: merchant_token,
  merchant_token: merchant_token, 
  nickname: nickname,
}


// getters
const getters = {
  logged: state => state.logged, 
  userId: state => state.userId,  
  nickname: state => state.nickname
}

// 登录mutations
const mutations = {
  /**
   * @description 设置登录状态
   * @param {object} state 状态
   * @param {array} data 数据
   */
  setLoginState (state, logged) {
    state.logged = logged 
    mutations.setUserId(state, merchant_token)
    mutations.setNickname(state, sessionStorage.getItem('nickname'))
  },

  /**
   * 设置用户id
   * @param state
   * @param userId
   */
  setUserId (state, userId) {
    state.userId = userId
  },

  /**
   * 设置用户昵称
   * @param state
   * @param userId
   */
  setNickname (state, nickname) {
    state.nickname = nickname
  }

}

export default {
  state,
  getters,
  mutations
}
