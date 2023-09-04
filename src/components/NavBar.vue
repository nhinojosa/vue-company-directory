<script setup>
import { ref } from 'vue'
    const brand = ref('🏛️ Fake Company Directory')
</script>


<template>
<nav>
    <div class="wrapper">
        <RouterLink :to="{name:'Home'}" class="brand">
            <span class="brand-title">{{ brand }}</span>
        </RouterLink>
        <div class="menu">
            <a href="#" class="menu-item">Departments</a>
            <a href="#" class="menu-item">settings</a>
            <a href="#" class="menu-login">logout</a>
        </div>
    </div>
</nav>

</template>

<style scoped lang="postcss">
     nav {
        @apply bg-slate-900 text-slate-200 h-20 flex;
        .wrapper {
            @apply container mx-auto w-full flex justify-between items-center;

            .brand {
                &-title {
                    @apply text-2xl font-bold text-yellow-500;
                }
            }

            .menu{
                @apply flex gap-2;
                &-item {
                    @apply rounded-md px-4 py-2 hover:bg-yellow-500 hover:text-slate-900;
                }

                &-login {
                    @apply rounded-md bg-red-500 px-4 py-2 text-red-100 hover:bg-red-700;
                }
            }
        }
     }
</style>