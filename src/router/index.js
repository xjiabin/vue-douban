import Vue from 'vue'
import Router from 'vue-router'

import MoveList from '@/components/page/MoveList'
import SearchMove from '@/components/page/SearchMove'
import My from '@/components/page/My'
import MoveDetails from '@/components/page/MoveDetails'
import MoreMove from '@/components/page/MoreMove'
import Celebrity from '@/components/page/Celebrity'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'move-list'
    },
    {
      path: '/move-list',
      name: 'move-list',
      component: MoveList
    },
    {
      path: '/search-move',
      name: 'search-move',
      component: SearchMove
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/move-details',
      name: 'move-details',
      component: MoveDetails
    },
    {
      path: '/more-move',
      name: 'more-move',
      component: MoreMove
    },
    {
      path: '/celebrity',
      name: 'celebrity',
      component: Celebrity
    }
  ]
})
