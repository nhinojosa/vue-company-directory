<script setup>
import MainCardSingle from '@/components/MainCardSingle.vue';

</script>



<template>
    <div class="sub-wrapper">
        <MainCardSingle v-bind:key="n" v-for="n in 20" />
    </div>
</template>

<style scoped lang="postcss">
.sub-wrapper {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4;
}

</style>