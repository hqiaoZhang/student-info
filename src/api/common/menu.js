/*
 * @Author: zhanghongqiao@hiynn.com
 * @Date: 2018-03-30 10:13:23
 * @Description: 左边菜单
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2021-07-26 22:54:36
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-16 14:15:22
 */
import config from '@/config/base.config'
let rootPath = config.routerPath
export default {
  mock: {
    "code": 0,
    "error": "",
    "trace": "",
    "result": {
      'student': [
        {
          "childList": null,
          "haveChildren": false,
          "icon": "&#xe8b9;",
          "id": "10000100000",
          "menuName": "系统首页",
          "menuType": 5,
          "menuUrl": `/student`,
          "orderNo": 4,
          "parentId": "10000"
        },{
          "childList": null,
          "haveChildren": false,
          "icon": "&#xe660;",
          "id": "10000100002",
          "menuName": "我的信息",
          "menuType": 5,
          "menuUrl": `/personalInfo`,
          "orderNo": 4,
          "parentId": "10000", 
        },{
          "childList": null,
          "haveChildren": false,
          "icon": "&#xe672;",
          "id": "10000100010",
          "menuName": "安全中心",
          "menuType": 5,
          "menuUrl": `/securityCenter`,
          "orderNo": 4,
          "parentId": "10000", 
        },
      ],
      "admin": [ 
        {
          "childList": null,
          "haveChildren": false,
          "icon": "&#xe8b9;",
          "id": "10000100001",
          "menuName": "系统首页",
          "menuType": 5,
          "menuUrl": `/admin`,
          "orderNo": 4,
          "parentId": "10000"
        }, 
        { 
          "haveChildren": false,
          "icon": "&#xe8ce;",
          "id": "a5e9ffff0c62445eb25cf04e84c88f35",
          "menuName": "成员管理",
          "menuType": 5,
          "menuUrl": `/commodityManage`,
          "orderNo": 6,
          "parentId": "10000",
          childList: [
            {
              "childList": null,
              "haveChildren": false,
              "icon": "",
              "id": "a5e9f001",
              "menuName": "入党申请人",
              "menuType": 5,
              "menuUrl": "/joinpartyApplicant",
              "orderNo": 6,
              "parentId": "a5e9ffff0c62445eb25cf04e84c88f35",
            },{
              "childList": null,
              "haveChildren": false,
              "icon": "",
              "id": "a5e9f002",
              "menuName": "入党积极份子",
              "menuType": 5,
              "menuUrl": "/partyActivists",
              "orderNo": 6,
              "parentId": "a5e9ffff0c62445eb25cf04e84c88f35",
            },{
              "childList": null,
              "haveChildren": false,
              "icon": "",
              "id": "a5e9f003",
              "menuName": "发展对象",
              "menuType": 5,
              "menuUrl": "/developmentObject",
              "orderNo": 6,
              "parentId": "a5e9ffff0c62445eb25cf04e84c88f35",
            },{
              "childList": null,
              "haveChildren": false,
              "icon": "",
              "id": "a5e9f004",
              "menuName": "预备党员",
              "menuType": 5,
              "menuUrl": "/probationaryParty",
              "orderNo": 6,
              "parentId": "a5e9ffff0c62445eb25cf04e84c88f35",
            },{
              "childList": null,
              "haveChildren": false,
              "icon": "",
              "id": "a5e9f005",
              "menuName": "正式党员",
              "menuType": 5,
              "menuUrl": "/formalParty",
              "orderNo": 6,
              "parentId": "a5e9ffff0c62445eb25cf04e84c88f35",
            }
          ]
        },  
        { 
          "haveChildren": false,
          "icon": "&#xe688;",
          "id": "a5e9ffff0c62445eb25cf04e84c88f36",
          "menuName": "我的支部",
          "menuType": 5,
          "menuUrl": "/myBranch",
          "orderNo": 6,
          "parentId": "10000", 
        }, 
      ], 
      "first": [
        {
          "childList": null,
          "haveChildren": true,
          "icon": "",
          "id": "10000",
          "menuName": "信息管理",
          "menuType": 5,
          "menuUrl": "javascript:void(0)",
          "orderNo": 36,
          "parentId": null
        },
      ],
    },
    "successful": true
  }
}
