<script setup lang="ts">
interface IProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  isTruncated?: boolean
  tag?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'b' | 'i'
  theme?: 'main'
  lineClamp?: number | string
}

withDefaults(defineProps<IProps>(), {
  size: 'sm',
  isTruncated: false,
  tag: 'span',
  theme: 'main',
  lineClamp: undefined,
})
</script>

<template>
  <component
      :is="tag"
      :class="[
          'ui-text',
          `ui-text--size-${size}`,
          `ui-text--theme-${theme}`,
          {
            'ui-text--truncated': isTruncated,
            'ui-text--line-clamp': lineClamp,
          }
      ]"
      :style="{ '-webkit-line-clamp': lineClamp }"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.ui-text {
  &--theme-main {
    color: #262626;
  }

  &--size-xs {
    font-size: rem(12);
    line-height: rem(16);
  }

  &--size-sm {
    font-size: rem(14);
    line-height: rem(24);
  }

  &--size-md {
    font-size: rem(18);
    line-height: rem(26);
  }

  &--size-lg {
    font-size: rem(24);
    line-height: rem(32);
  }

  &--truncated {
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &--line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>