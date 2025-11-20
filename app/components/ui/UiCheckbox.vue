<script setup lang="ts" generic="T">
interface IProps {
  value?: string | number | boolean | T[keyof T]
  theme?: 'main'
  name?: string
  label?: string | T[keyof T]
  indeterminate?: boolean
}

withDefaults(defineProps<IProps>(), {
  theme: 'main',
  name: '',
  label: undefined,
  value: undefined,
  indeterminate: false,
});

const modelValue = defineModel<boolean>();
</script>

<template>
  <label
    :class="[
      'ui-checkbox',
      `ui-checkbox--theme-${theme}`,
      {
        'ui-checkbox--checked': modelValue,
        'ui-checkbox--indeterminate': indeterminate
      }
  ]">
    <span class="ui-checkbox__input">
      <input v-model="modelValue" type="checkbox" :name="name" :value="value">
    </span>
    <UiText v-if="label || $slots.default" size="md" class="ui-checkbox">
      <slot>{{ label }}</slot>
    </UiText>
  </label>
</template>

<style scoped lang="scss">
.ui-checkbox {
  display: inline-flex;
  align-items: center;
  gap: rem(8);
  cursor: pointer;

  &--checked {
    .ui-checkbox__input {
      background-color: rootVar(bg-4);

      &:after {
        content: '';
      }
    }
  }

  &__input {
    position: relative;
    user-select: none;

    width: rem(20);
    height: rem(20);

    border: rem(1) solid rootVar(bg-4);
    border-radius: rem(4);

    transition: border 300ms, background-color 300ms, color 300ms;

    &:after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-40%, -65%) rotate(45deg);

      width: rem(5);
      height: rem(10);

      border: 2px solid rootVar(bg-main);
      border-left: 0;
      border-top: 0;

    }

    input {
      display: none;
    }
  }

  &:hover {
    .ui-checkbox__input {
      span {
        border-color: rootVar(bg-4-hover);
      }
    }
  }
}
</style>