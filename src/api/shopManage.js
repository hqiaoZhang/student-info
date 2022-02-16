/*
 * @Author: zhanghongqia 
 * @email: 991034150@qq.com 
 * @Date: 2021-07-25 15:15:21 
 * @Description: 店铺管理
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2021-07-25 15:46:57
 */


//  保存店铺信息
export const fetchShopSave = {
  url: '/shop/save',
  config: {
    method: 'POST', 
    isMsg: true, // 是否需要后端的msg
  }
}

// 店铺详情
export const fetchShopDetail = {
  url: '/shop/detail'
}