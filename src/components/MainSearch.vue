<template>
    <div class="wrapper">
        <input type="text" placeholder="Search Staff Member" class="search"/>
        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</span>
    </div>
</template>

<style scoped lang="postcss">
.wrapper {
    @apply relative flex w-full items-stretch;
    .search {
        @apply px-3 py-4 placeholder-slate-400 text-slate-700 rounded-md border-0 outline-none focus:ring focus:ring-yellow-500;
    }

    .icon {
        @apply absolute right-0 pr-8 py-4 z-10 text-slate-400;
    }
}



</style>