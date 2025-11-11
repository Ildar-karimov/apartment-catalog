<script setup lang="ts">
import { getApartments } from '~/services/apartment.service';

const { data: apartments } = await getApartments()
</script>

<template>
  <section class="home-page">
    <UiText size="md" tag="h1" class="home-page__title">Покупка\Аренда недвижимости</UiText>
    <UiText v-if="apartments">
      {{ apartments?.length }} {{ pluralize(apartments.length, ['объявление', 'объявления', 'объявлений']) }}
    </UiText>
    <div class="home-page__content">
      <ApartCard v-for="apartment in apartments" :key="apartment.id" :apartment="apartment" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  gap: rem(14);
  padding: 0 rem(120);
  margin: 0 auto;
  max-width: rem(1200);

  &__title {
    font-weight: bold;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: rem(16);
  }
}
</style>