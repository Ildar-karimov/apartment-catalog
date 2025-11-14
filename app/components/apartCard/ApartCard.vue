<script setup lang="ts">
import type { IApartment } from '~/types/apartment';
import { APARTMENT_TYPE_LABEL } from '~/consts/apartment';

interface IProps {
  apartment: IApartment
}

const props = defineProps<IProps>();

const isRent = computed(() => props.apartment.type === 'rent');
const isSale = computed(() => props.apartment.type === 'sale');
</script>

<template>
  <NuxtLink :to="`apart/${apartment.id}`" class="apart-card">
    <div>
      <img :src="apartment.images?.[0]" class="apart-card__img" width="340" height="300" alt="">
    </div>
    <div class="apart-card__content">
      <UiText size="md" is-truncated>{{ apartment.title }}</UiText>
      <UiText is-truncated tag="b" size="xs">{{ apartment.address }}</UiText>
      <UiText theme="secondary">{{ APARTMENT_TYPE_LABEL[apartment.type] }}</UiText>
      <UiText>{{ apartment.rooms }}-комн.</UiText>
      <UiText>{{ apartment.area }} м²</UiText>
      <UiText>{{ apartment.floor }}/{{ apartment.total_floors }} эт.</UiText>

      <AgentCard :agent="apartment.agent" class="apart-card__agent" />
    </div>
    <div class="apart-card__right">
      <UiText tag="b" size="md">
        {{ apartment.price }} ₽{{ isRent ? '/мес.' : undefined }}
      </UiText>
      <UiText v-if="isSale">
        В ипотеку от {{ Math.max(Math.ceil(apartment.price / 264), 25999) }} ₽
      </UiText>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.apart-card {
  display: flex;
  gap: rem(16);
  padding: rem(16) rem(32) rem(16) rem(16);

  background-color: rootVar(bg-main);
  border-radius: rem(20);

  &__img {
    height: rem(300);
    width: rem(340);
    object-fit: cover;

    border-radius: rem(8);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: rem(8);
    max-width: rem(300);
  }

  &__right {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    gap: rem(8);
  }

  &__agent {
    margin-top: auto;
  }
}
</style>