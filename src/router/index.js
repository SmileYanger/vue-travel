import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import ListDetails from "@/pages/details/details"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/city',
    	name:'City',
    	component:City
    },{
    	path:'/details/:id',
    	name:'ListDetails',
    	component:ListDetails
    }
  ]
})
