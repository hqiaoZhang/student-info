/*
 * @Author: zhanghongqiao 
 * @Date: 2021-08-03 14:42:36 
 * @Email: 991034150@qq.com 
 * @Description: 公用API出口文件
 * @Last Modified by: zhanghongqiao 
 * @Last Modified time: 2021-08-03 14:42:36 
 */
 

 // 菜单导航
import menuData from './menu'
export const fetchMenus = {
  url: '/function/getFunctionByUserId',
  enableMock: true, // 是否使用本地假数据
  mock: menuData.mock
}

// 登录
export const fetchLogin = {
  url: '/login',
  config: {
    method: 'POST',
    isMsg: true, // 是否需要后端的msg
  }
}

// 退出登录
export const fetchLogout = {
  url: '/logout',
  config: {
    method: 'POST',
    isMsg: true, // 是否需要后端的msg
  },
}
 
// 文件上传
export const fetchUpload = {
  url: '/file/upload/v2',
  config: {
    method: 'POST',
    contentType: 'multipart/form-data',
    isMsg: true, // 是否需要后端的msg
  }
}

// 快递公司
export const fetchExpressList = {
  url: '/express/list'
}