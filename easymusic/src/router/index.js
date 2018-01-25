import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import axios from 'axios'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

var client = axios.create({
  baseURL:'http://www.localhost:8080'
})

client.get('/top/playlist/highquality')
    .then(res => console.log(res))
