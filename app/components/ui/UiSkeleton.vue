<script setup lang="ts">
interface IProps {
  rows?: number
  gap?: string,
  width?: string,
  height?: string,
}

withDefaults(defineProps<IProps>(), {
  rows: 1,
  gap: '0.5rem',
  width: '100%',
  height: '2rem',
});
</script>

<template>
  <div class="ui-skeleton" :style="{ gap }">
    <div v-for="i in rows" :key="i" class="ui-skeleton__el" :style="{ width, height }" />
  </div>
</template>

<style scoped lang="scss">
.ui-skeleton {
  display: flex;
  flex-direction: column;

  &__el {
    position: relative;
    display: block;

    color: transparent;

    background: #c4cccc;
    border-radius: rem(6);

    overflow: hidden;
    user-select: none;

    &::after {
      animation: wave 1.5s linear 0s infinite;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
      content: '';
      position: absolute;
      transform: translate3d(-100%, 0, 0);
      will-change: transform;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }
}

@keyframes wave {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  60% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>