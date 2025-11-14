<script setup lang="ts">
import useTheme from '~/composables/useTheme';

const { appTheme } = useTheme();

useHead(() => ({
  htmlAttrs: {
    'data-theme': appTheme.value,
  },
}));
</script>

<template>
  <NuxtLoadingIndicator :height="4" color="#009e36" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
