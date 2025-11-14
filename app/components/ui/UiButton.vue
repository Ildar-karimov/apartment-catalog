<script setup lang="ts">

interface IProps {
  theme?: 'main' | 'primary'
  size?: 'inline' | 'md'
  type?: 'button' | 'submit'
}

withDefaults(defineProps<IProps>(), {
  theme: 'main',
  type: 'button',
  size: 'inline',
});
</script>

<template>
  <button :type="type" :class="['ui-button', `ui-button--theme-${theme}`, `ui-button--size-${size}`]">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  transition: color, background-color 300ms;
  
  &--theme-main {
    color: rootVar(color-txt-secondary);

    &:hover {
      color: rootVar(color-txt-secondary-hover);
      background-color: rootVar(bg-third-hover);
    }

    &:active {
      color: rootVar(color-txt-secondary-active);
    }
  }

  &--theme-primary {
    color: rootVar(color-txt-third);
    background-color: rootVar(bg-4);

    &:hover {
      background-color: rootVar(bg-4-hover);
    }

    &:active {
      background-color: rootVar(bg-4-active);
    }
  }

  &--size-md {
    padding: rem(16) rem(24);
    border-radius: rem(6);
  }
}
</style>