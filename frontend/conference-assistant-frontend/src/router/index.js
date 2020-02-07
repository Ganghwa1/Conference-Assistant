import Vue from 'vue'
import Router from 'vue-router'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import TeamListPage from '../pages/TeamListPage'
//헤더 컴포넌트
import AppHeader from '../components/AppHeader'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path:'/teamlist',
      name:'TeamListPage',
      components:{
        header : AppHeader,
        default: TeamListPage
      }
    },
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path:'/signup',
      name: 'Signup',
      component: Signup
    },

  ]
})
