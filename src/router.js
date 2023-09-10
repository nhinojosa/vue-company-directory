import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
const {isAuthenticated} = useAuth()
import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import SettingsPage from '@/components/SettingsPage.vue'
import NotFound from '@/components/NotFound.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/vue-company-directory/', name: 'Home', component: MainPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/settings', name: 'Settings', component: SettingsPage, meta: {requiresAuth: true} },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
