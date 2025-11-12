<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core';

interface IProps {
  pending?: boolean;
  isFinished?: boolean;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  loadNext: []
}>();

const prefetchRef = useTemplateRef<HTMLDivElement>('prefetch');

useInfiniteScroll(prefetchRef, () => {
  if (props.pending) return;
  emit('loadNext');
}, {
  canLoadMore: () => !props.isFinished,
});
</script>

<template>
  <div class="infinite-scroll">
    <slot />
    <UiLoader v-if="pending" />
    <div ref="prefetch" />
  </div>
</template>