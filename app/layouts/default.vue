<script setup lang="ts">
import PageHeader from "~/components/layout/PageHeader.vue";
import PageBody from "~/components/layout/PageBody.vue";
import PageFooter from "~/components/layout/PageFooter.vue";
</script>

<template>
  <PageHeader />
  <PageBody>
    <slot />
  </PageBody>
  <PageFooter />
</template>
