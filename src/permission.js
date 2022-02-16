import router from './router'
import { resetSize, getCookie } from '@/utils/util' 
import baseconfig from '@/config/base.config'

const whiteList = baseconfig.whiteList  // 白名单
const loginType = sessionStorage.getItem('loginType')
router.beforeEach((to, from, next) => {
  document.title = to.name

  let merchant_token = getCookie('merchant_token') 
  if (['/login'].includes(to.path)) {
    resetSize(1)
  }  
  if (merchant_token) {
    if (to.path === '/login') {
      // 已经登录调整的首页
      next({ path: '/' })
    }else {
      next()
    }
  } else {  
    if (whiteList.indexOf(to.path) !== -1) {
      next() 
    } else {
      console.log('222222222222222222')
      // 未登录
      next(`/login?redirect=${to.path}`)
    }
  }
})
