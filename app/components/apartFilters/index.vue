<script setup lang="ts">

const apartFilters = ref({
  type: undefined,
  rooms: [],
});

const onSubmit = () => {
};

const checkbox = ref(false);

const roomValues = [
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  }, {
    label: '3',
    value: 3,
  },
  {
    label: '4+',
    value: 4,
  }];
</script>

<template>
  <form class="apart-filters" @submit.prevent="onSubmit">
    <div class="apart-filters__body">
      <div>
        <UiRadio v-model="apartFilters.type" value="sale" label="Покупка" theme="tab" />
        <UiRadio v-model="apartFilters.type" value="rent" label="Аренда" theme="tab" />
      </div>
      <div>
        <UiText tag="b">Кол-во комнат:</UiText>
        <UiCheckboxGroup v-model="apartFilters.rooms" :options="roomValues" label-key="label" value-key="value" />

        <UiCheckbox v-model="checkbox" label="4+" />
      </div>
    </div>

    <div class="apart-filters__actions">
      <UiButton type="submit" theme="primary" size="sm">Применить</UiButton>
    </div>
  </form>
</template>

<style scoped lang="scss">
.apart-filters {
  padding: rem(20) rem(24);
  max-width: rem(1200);
  margin: 0 auto rem(20);
  display: flex;
  flex-direction: column;
  gap: rem(20);

  background-color: rootVar(bg-main);
  border-radius: rem(20);

  &__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: rem(12);
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: rem(12);
  }
}
</style>