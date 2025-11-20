<script setup lang="ts">
import { getApartments } from '~/services/apartment.service';
import InfiniteScroll from '~/components/tech/InfiniteScroll.vue';

const { allApartments, allApartmentsCount, currentPage } = storeToRefs(useApartmentsStore());
const { addApartments } = useApartmentsStore();

const { data, pending } = await getApartments({ page: currentPage });

watch(data, () => {
  if (data.value) {
    addApartments(data.value.results, data.value.count);
  }
}, { immediate: true });
</script>

<template>
  <ApartFilters />
  <section class="home-page">
    <UiText size="md" tag="h1" class="home-page__title">Покупка\Аренда недвижимости</UiText>
    <UiSkeleton v-if="pending" height="1.5rem" width="6rem" />
    <UiText v-else>
      {{ allApartmentsCount }} {{ pluralize(allApartmentsCount, ['объявление', 'объявления', 'объявлений']) }}
    </UiText>
    <InfiniteScroll
        class="home-page__content"
        :pending="pending"
        :is-finished="allApartments.length === allApartmentsCount"
        @load-next="currentPage += 1"
    >
      <ApartCard v-for="apartment in allApartments" :key="apartment.id" :apartment="apartment" />
    </InfiniteScroll>
  </section>
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  gap: rem(14);
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