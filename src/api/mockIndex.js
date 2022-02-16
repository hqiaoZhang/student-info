/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-07 11:22:20
 * @Email: 991034150@qq.com
 * @Description: 所有mock 出口
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2021-08-07 22:03:19
 */
// 公用数据
import * as commonApi from './common' 
// 调用方管理
import * as manageApi from './manage'
// 商家入驻
import * as merchantApi from './merchant'
// 店铺管理
import * as shopManageApi from './shopManage'
// 商品管理
import * as commodityManageApi from './commodityManage'
// 退货地址管理
import * as addressManageApi from './addressManage'
// 订单管理
import * as orderManageApi from './orderManage'
// 订单结算
import * as settlementApi from './settlement'
// 商家账户
import * as merchantAccountApi from './merchantAccount'
// 提现
import * as cashOutAPi from './cashOut'
export default {
  ...commonApi, 
  ...manageApi,
  ...merchantApi,
  ...shopManageApi,
  ...commodityManageApi,
  ...addressManageApi,
  ...orderManageApi,
  ...settlementApi,
  ...merchantAccountApi,
  ...cashOutAPi
}
