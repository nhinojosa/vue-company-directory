import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
const {isAuthenticated} = useAuth()
import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import SettingsPage from '@/components/SettingsPage.vue'
import NotFound from '@/components/NotFound.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/settings', name: 'Settings', component: SettingsPage, meta: {requiresAuth: true} },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {

  if (to.meta.requiresAuth && !isAuthenticated.value)
    return  {name: 'Login', query: {redirect: to.fullPath}}
})

export default router
