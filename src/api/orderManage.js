/*
 * @Author: zhanghongqia 
 * @email: 991034150@qq.com 
 * @Date: 2021-08-01 10:44:16 
 * @Description: 订单管理
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2021-08-02 14:04:11
 */
 

 //  订单列表
export const fetchOrderPage = {
  url: '/order/page',
  config: {
    method: 'POST',  
  }
}

// 所有订单状态列表
export const fetchOrderStates = {
  url: '/order/states'
}

// 商家设置优惠买单价格
export const fetchSetprice = {
  url: '/order/set/price',
  config: {
    method: 'POST',  
    isMsg: true
  }
}

// 商家发货
export const fetchSendExpress= {
  url: '/order/send/express',
  config: {
    method: 'POST',  
    isMsg: true
  }
}

// 订单收货人信息
export const fetchExpress= {
  url: '/order/express/:id',
}

// 订单详情
export const fetchOrderDetail = {
  url: '/order/detail/:id'
}

// 通过订单退货申请
export const fetchAgreeReturn= {
  url: '/order/agree/return/:id',
  config: {
    method: 'POST',  
    isMsg: true
  }
}

// 商家确认收到退货并退款
export const fetchConfirmReturn= {
  url: '/order/confirm/return/:id',
  config: {
    method: 'POST',  
    isMsg: true
  }
}