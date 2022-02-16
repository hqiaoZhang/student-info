/*
 * @Author: zhanghongqia 
 * @email: 991034150@qq.com 
 * @Date: 2021-08-02 21:57:50 
 * @Description: 订单结算
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2021-08-03 10:58:09
 */

 //  可结算订单分页查询接口
 export const fetchSettlementPage = {
  url: '/settlement/page',
  config: {
    method: 'POST',  
  }
}

// 结算订单
export const fetchSettlementClose = {
  url: '/settlement/close',
  config: {
    method: 'POST',  
    isMsg: true
  }
}