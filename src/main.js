import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Category from './pages/Category.vue'
import Meal from './pages/Meal.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/category/:name', component: Category },
  { path: '/meal/:name', component: Meal },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


createApp(App).use(router).mount('#app')
