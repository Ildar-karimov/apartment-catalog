<script setup lang="ts">
import { getApartmentById } from '~/services/apartment.service';
import { APARTMENT_TYPE_LABEL } from '~/consts/apartment';

const route = useRoute();
const { data: apartment } = getApartmentById(Number(route.params.id));

const isRent = computed(() => apartment.value?.type === 'rent');
</script>

<template>
  <section class="apart-page">
    <div v-if="apartment" class="apart-page__content">
      <UiText size="lg" tag="h1">{{ apartment.title }}</UiText>
      <UiText theme="secondary">{{ APARTMENT_TYPE_LABEL[apartment.type] }}</UiText>
      <img :src="apartment.images?.[0]" class="apart-card__img" width="100%" height="450" alt="">
      <div class="apart-page__row">
        <UiText tag="b">Адрес</UiText>
        <UiText>{{ apartment.address }}</UiText>
      </div>
      <div class="apart-page__row">
        <UiText tag="b">Описание</UiText>
        <UiText>{{ apartment.description }}</UiText>
      </div>
      <div class="apart-page__row">
        <UiText tag="b">Преимущества</UiText>
        <div class="apart-page__amenities">
          <div v-for="amenity in apartment.amenities" :key="amenity" class="amenity-card">
            <div class="amenity-card__icon">
              <Icon name="system-uicons:chevron-up-circle" />
            </div>
            <UiText>{{ amenity }}</UiText>
          </div>
        </div>
      </div>
      <div class="apart-page__row">
        <UiText tag="b">Продавец</UiText>
        <AgentCard :agent="apartment.agent" />
      </div>
    </div>
    <div v-if="apartment" class="apart-page__main-info">
      <UiText>
        {{ apartment.rooms }}-комн. {{ apartment.category }}, {{ apartment.area }} м²
      </UiText>
      <UiText size="sm" theme="secondary">{{ apartment.floor }}/{{ apartment.total_floors }} эт.</UiText>
      <UiText tag="b" size="lg">
        {{ apartment.price }} ₽{{ isRent ? '/мес.' : undefined }}
      </UiText>
      <UiText theme="secondary">{{ Math.ceil(apartment.price / apartment.area) }} ₽/м²</UiText>
      <AgentCard class="apart-page__agent" :agent="apartment.agent" />
      <UiButton theme="primary" size="md" class="apart-page__btn">Показать телефон</UiButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.apart-page {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: rem(14);
  padding: 0 rem(120);
  max-width: rem(1400);
  margin: 0 auto;

  &__content,
  &__main-info {
    background-color: #fff;
    border-radius: rem(16);
    padding: rem(16);
  }

  &__main-info {
    position: sticky;
    top: rem(16);

    display: flex;
    flex-direction: column;
    gap: rem(4);
    width: rem(300);
    min-width: rem(300);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: rem(8);
  }

  img {
    object-fit: cover;
    height: rem(450);
    border-radius: rem(16);
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: rem(4);
  }

  &__agent {
    margin-top: rem(24);
  }

  &__btn {
    margin-top: rem(16);
  }

  &__amenities {
    display: grid;
    grid-template-columns: rem(300) rem(300);
    gap: rem(16);
    justify-content: center;
  }
}

.amenity-card {
  display: flex;
  gap: rem(8);
  align-items: center;
  justify-content: center;

  &__icon {
    display: flex;
    align-items: center;

    font-size: rem(36);
    color: #009e36;
  }
}
</style>