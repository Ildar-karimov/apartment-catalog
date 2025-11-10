<script setup lang="ts">

interface IProps {
  theme?: 'main'
  type?: 'button' | 'submit'
}

withDefaults(defineProps<IProps>(), {
  theme: 'main',
  type: 'button',
})
</script>

<template>
  <button :type="type" :class="['ui-button', `ui-button--theme-${theme}`]">
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
}
</style>