<!--<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { login, logout } = useAuth()

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')
const logUserIn = () => {
    if (login(username.value, password.value)) {
        if (route.query.redirect)
        {
            router.push(route.query.redirect)
        }
        else
        {
           router.push({name:'Home'}) 
        }
        
    } 
    else
    {
       logout() 
    }
    
}
</script>



<template>
    <form class="login-form" @submit.prevent="logUserIn">
        <input v-model="username" type="text" placeholder="Username"/>
        <input v-model="password" type="password" placeholder="Password"/>
        <button type="submit" class="bg-green-500 px-4 py-2" >
            Login
        </button>
    </form>
</template>


<style lang="postcss">
.login-form {
    @apply flex flex-col max-w-md mx-auto mt-80 gap-4 p-8 bg-white rounded-md shadow-lg;
    & input {
       @apply  text-xl px-4 py-2 ring-1 rounded-md ring-slate-300;
    }
}

</style>-->

<script setup>
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  import { useAuth } from '@/composables/useAuth'
  const { login, logout } = useAuth()

  const router = useRouter()
  const route = useRoute()

  const username = ref('')
  const password = ref('')

  const logUserIn = async () => {
    if (await login(username.value, password.value)) {
      if (route.query.redirect) {
        router.push(route.query.redirect)
      } else {
        router.push({ name: 'Home' })
      }
    } else {
      logout()
    }
  }
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="bg-green-500 px-4 py-2">Log In</button>
  </form>
</template>

<style scoped lang="postcss">
  .login-form {
    @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;
    & input {
      @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
    }
  }
</style>