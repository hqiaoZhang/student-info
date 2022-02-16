/*
 * @Author: zhanghongqia 
 * @email: 991034150@qq.com 
 * @Date: 2021-08-07 09:40:11 
 * @Description: 提现API
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2021-08-10 22:47:05
 */
 
// 商家提现申请分页查询接口
 export const fetchCashMerchantPage = {
  url: '/cash/merchant/page',
  config: {
    method: 'POST',  
  }
}

// 获取所有提现申请状态
export const fetchCashMerchantStates = {
  url: '/cash/merchant/draw/states'
}

// 通过提现申请
export const fetchCashMerchantPass = {
  url: '/cash/merchant/pass/:id',
  config: {
    method: 'POST',  
    isMsg: true, // 是否需要后端的msg
  }
}

export const fetchCashMerchantPay = {
  url: '/cash/merchant/pay',
  config: {
    method: 'POST',  
    isMsg: true, // 是否需要后端的msg
  }
}

// 驳回提现申请
export const fetchCashMerchantReject = {
  url: '/cash/merchant/reject',
  config: {
    method: 'POST',  
    isMsg: true, // 是否需要后端的msg
  }
}

// 商家申请提现接口
export const fetchCashMerchantApply = {
  url: '/cash/merchant/apply',
  config: {
    method: 'POST',  
    isMsg: true, // 是否需要后端的msg
  }
}


// 系统用户查看提现申请
export const fetchCashSystemPage = {
  url: '/cash/merchant/system/page',
  config: {
    method: 'POST',  
  }
}

// 系统用户查看提现申请详情
export const fetchCashSystemDetail = {
  url: '/cash/merchant/system/detail/:id', 
} 

