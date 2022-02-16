/*
 * @Author: zhanghongqiao 
 * @Date: 2021-07-29 13:25:45 
 * @Email: 991034150@qq.com 
 * @Description: 退货地址管理
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2021-07-29 13:29:44
 */

//  保存退回地址信息
 export const fetchExpressSave = {
   url: '/express/merchant/save',
   config: {
    method: 'POST', 
    isMsg: true, // 是否需要后端的msg
  }
 }

//  退货地址详情
 export const fetchExpressDetail = {
  url: '/express/merchant/detail', 
}