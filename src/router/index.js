/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-29 21:07:35
 * @Description: 路由配置
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-16 14:17:19
 */

import Vue from 'vue'
import Router from 'vue-router' 

// 注册Router
Vue.use(Router)
// 配置项
import config from '@/config/base.config'
// 登录
const Login = () => import('@/containers/login/index.vue')  
//  学生首页
const StudentHome  = () => import('@/containers/studentHome/index.vue')
//  负责人首页
const AdminHome  = () => import('@/containers/adminHome/index.vue')
// 全安中心
const SecurityCenter  = () => import('@/containers/securityCenter/index.vue')
// 我的信息
const PersonalInfo  = () => import('@/containers/personalInfo/index.vue')
// 入党申请人
const JoinpartyApplicant  = () => import('@/containers/joinpartyApplicant/index.vue') 
// 添加学生信息
const AddStudentInfo  = () => import('@/containers/joinpartyApplicant/studentInfo.vue') 
// 入党积极份子
const PartyActivists  = () => import('@/containers/partyActivists/index.vue')
// 我的支部
const MyBranch  = () => import('@/containers/myBranch/index.vue')

//  0是学生，1是负责人
const loginType = sessionStorage.getItem('loginType')
 
const routes = [
  {
    path: '*',
    redirect: loginType == 1 ? '/admin' : '/student',
    component: loginType == 1 ? AdminHome : StudentHome // 首页
  }, 
  {
    path:`/login`, // 登录
    name: '登录',
    component: Login
  },
  {
    path: `/student`,
    name: '系统首页',
    component: StudentHome
  },{
    path: `/admin`,
    name: '系统首页',
    component: AdminHome
  },{
    path: `/securityCenter`,
    name: '安全中心',
    component: SecurityCenter 
  },{
    path: `/personalInfo`,
    name: '我的信息',
    component: PersonalInfo 
  },{
    path: `/joinpartyApplicant`,
    name: '入党申请人',
    component: JoinpartyApplicant 
  }, {
    path: `/joinpartyApplicant/studentInfo`,
    name: '添加学生信息',
    component: AddStudentInfo  
  },{
    path: `/partyActivists`,
    name: '入党积极份子',
    component: PartyActivists  
  },{
    path: `/developmentObject`,
    name: '发展对象',
    component: PartyActivists  
  },{
    path: `/probationaryParty`,
    name: '预备党员',
    component: PartyActivists  
  },{
    path: `/formalParty`,
    name: '正式党员',
    component: PartyActivists  
  },{
    path: `/myBranch`,
    name: '我的支部',
    component: MyBranch  
  } 
]

export default new Router({
  mode: 'history',
  base: config.routerPath,
  routes
})
