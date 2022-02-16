/*
 * @Author: zhanghongqia 
 * @email: 991034150@qq.com 
 * @Date: 2021-07-24 13:53:25 
 * @Description: 商家
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2021-07-24 14:52:03
 */

//  商家入驻
export const fetchMerchantSave = {
  url: '/merchant/save',
  config: {
    method: 'POST', 
    isMsg: true, // 是否需要后端的msg
  }
}

// 商家列表
export const fetchMerchantPage = {
  url: '/merchant/page',
  config: {
    method: 'POST',  
  }
}

// 商家详情
export const fetchMerchantDetail = {
  url: '/merchant/detail/:mcode'
}

// 商家审核通过
export const fetchMerchantPass = {
  url: '/merchant/pass/:mcode',
  config: { 
    isMsg: true, // 是否需要后端的msg
  }
}