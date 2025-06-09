import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import ruyudengji from '@/views/modules/ruyudengji/list'
    import yonghu from '@/views/modules/yonghu/list'
    import jiankangdengji from '@/views/modules/jiankangdengji/list'
    import shaixuanleixing from '@/views/modules/shaixuanleixing/list'
    import chuyudengji from '@/views/modules/chuyudengji/list'
    import gaizaoxinxi from '@/views/modules/gaizaoxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/ruyudengji',
        name: '入狱登记',
        component: ruyudengji
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/jiankangdengji',
        name: '健康登记',
        component: jiankangdengji
      }
      ,{
	path: '/shaixuanleixing',
        name: '筛选类型',
        component: shaixuanleixing
      }
      ,{
	path: '/chuyudengji',
        name: '出狱登记',
        component: chuyudengji
      }
      ,{
	path: '/gaizaoxinxi',
        name: '改造信息',
        component: gaizaoxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
