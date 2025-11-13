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
    color: #738295;

    &:hover {
      color: #262626;
      background-color: #ccf1d9;
    }

    &:active {
      color: #171717;
    }
  }

  &--theme-primary {
    color: #fff;
    background-color: #009e36;

    &:hover {
      background-color: #009532;
    }

    &:active {
      background-color: #007529;
    }
  }

  &--size-md {
    padding: rem(16) rem(24);
    border-radius: rem(6);
  }
}
</style>