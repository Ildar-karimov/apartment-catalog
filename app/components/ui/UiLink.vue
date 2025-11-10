<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

interface IProps {
  theme?: 'main'
  to: RouteLocationRaw
}

withDefaults(defineProps<IProps>(), {
  theme: 'main',
})
</script>

<template>
  <NuxtLink :to="to" :class="['ui-link',`ui-link--theme-${theme}`]">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.ui-link {
  transition: color 300ms;

  &--theme-main {
    color: #738295;

    &:hover {
      color: #262626;
    }
  }
}
</style>