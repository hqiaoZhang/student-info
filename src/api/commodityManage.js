/*
 * @Author: zhanghongqiao 
 * @Date: 2021-07-28 14:23:38 
 * @Email: 991034150@qq.com 
 * @Description: 商品管理
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2021-08-01 10:44:21
 */


//  商品列表
export const fetchProductPage = {
  url: '/product/page',
  config: {
    method: 'POST',  
  }
}

//  添加或者修改商品
export const fetchProductSave = {
  url: '/product/save',
  config: {
    method: 'POST', 
    isMsg: true, // 是否需要后端的msg
  }
}

// 商品详情
export const fetchProductDetail = {
  url: '/product/detail/:id'
}

// 商品上架
export const fetchProductUp = {
  url: '/product/up/:id',
  config: {
    method: 'POST', 
    isMsg: true, // 是否需要后端的msg
  }
}

// 商品下架
export const fetchProductDown = {
  url: '/product/down/:id',
  config: {
    method: 'POST', 
    isMsg: true, // 是否需要后端的msg
  }
}

// 获取所有支付类型
export const fetchProductPayTypes = {
  url: '/product/pay/types', 
}