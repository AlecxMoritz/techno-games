import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppGames from '@/components/AppGames'
import AppSickPicks from '@/components/AppSickPicks'
import AppAnnouncements from '@/components/AppAnnouncements'
import AppCurrentProjects from '@/components/AppCurrentProjects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/games',
      name: 'AppGames',
      component: AppGames
    },
    {
      path: '/sickpicks',
      name: 'AppSickPicks',
      component: AppSickPicks
    },
    {
      path: '/currentprojects',
      name: 'AppCurrentProjects',
      component: AppCurrentProjects
    },
    {
      path: '/announcements',
      name: 'AppAnnouncements',
      component: AppAnnouncements
    }
  ]
})
