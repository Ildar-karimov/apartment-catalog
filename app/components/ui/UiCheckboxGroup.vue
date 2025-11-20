<script setup lang="ts" generic="T">
interface IProps<T> {
  options: T[];
  labelKey: keyof T;
  valueKey: keyof T;
}

const props = defineProps<IProps<T>>();

type ValueType = T[typeof props.valueKey];

const modelValue = defineModel<ValueType[]>({ default: () => [] });

const onChange = (value: ValueType) => {
  const index = modelValue.value.indexOf(value);

  if (index !== -1) {
    modelValue.value.splice(index, 1);
  } else {
    modelValue.value.push(value);
  }
};
</script>

<template>
<div>
  <UiCheckbox
      v-for="checkbox in options"
      :key="String(checkbox[props.valueKey])"
      :value="checkbox[props.valueKey]"
      :label="checkbox[labelKey]"
      :model-value="modelValue.includes(checkbox[valueKey])"
      @update:model-value="onChange(checkbox[valueKey])"
  />
</div>
</template>

<style scoped lang="scss">

</style>