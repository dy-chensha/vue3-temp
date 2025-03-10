import {createRouter,createWebHashHistory} from 'vue-router'
import { constantRoutes } from './routes'
// 创建路由
let router = createRouter({
  history:createWebHashHistory(),
  routes:constantRoutes,
  scrollBehavior(){
    return {
      left:0,
      top:0
    }
  }
})
export default router