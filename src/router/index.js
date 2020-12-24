import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'home',
    // component: () => import('@/views/home'),
    component: () => import('@/views/taskeditdata'),
    meta: { keepAlive: true }
  },
  // 任务详情
  {
    path: '/taskdetails/:taskAreaId',
    name: 'taskdetails',
    component: () => import('@/views/taskdetails'),
    // 将动态路由参数映射到组件的props中, 无论是访问还是维护性都很方便
    props: true,
    meta: { keepAlive: false }
  },
  // 任务数据查看,编辑
  {
    path: '/taskeditdata/:taskData',
    name: 'taskeditdata',
    component: () => import('@/views/taskeditdata'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
