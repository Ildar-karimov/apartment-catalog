<script setup lang="ts">
type TValue = string | number | boolean;

interface IProps {
  value: TValue;
  theme?: 'main' | 'tab'
  name?: string
  label?: string
}

const props = withDefaults(defineProps<IProps>(), {
  theme: 'main',
  name: '',
  label: undefined,
});

const modelValue = defineModel<TValue>();
const isChecked = computed(() => modelValue.value == props.value);
</script>

<template>
  <label :class="['ui-radio', `ui-radio--theme-${theme}`, { 'ui-radio--checked': isChecked }]">
    <span class="ui-radio__input">
      <input
          v-model="modelValue"
          type="radio"
          :name="name"
          :value="value"
      >
    </span>
    <UiText v-if="label || $slots.default" size="md" class="ui-radio__label">
      <slot>{{ label }}</slot>
    </UiText>
  </label>
</template>

<style scoped lang="scss">
.ui-radio {
  display: inline-flex;
  align-items: center;
  gap: rem(8);
  cursor: pointer;

  &--checked {
    .ui-radio__input {
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
    border-radius: 50%;

    transition: border 300ms;

    &:after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      width: rem(10);
      height: rem(10);

      background-color: rootVar(bg-4);
      border-radius: 50%;
    }

    input {
      display: none;
    }
  }

  &:hover {
    .ui-radio__input {
      span {
        border-color: rootVar(bg-4-hover);
      }
    }
  }

  &--theme-tab {
    $border-radius: #{rem(8)};

    .ui-radio__input {
      display: none;
    }

    padding: rem(8) rem(20);

    border: rem(1) solid rootVar(bg-4);
    border-right-color: transparent;

    transition: background-color 300ms;

    &:hover {
      background-color: rootVar(bg-third-hover);
    }

    &.ui-radio--checked {
      background-color: rootVar(bg-4);

      .ui-radio__label {
        color: rootVar(color-txt-third);
      }
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }


    &:last-child {
      border-right-color: rootVar(bg-4);
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>