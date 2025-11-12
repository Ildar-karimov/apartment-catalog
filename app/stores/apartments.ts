import type { IApartment } from '~/types/apartment';

export const useApartmentsStore = defineStore('useApartmentsStore', () => {
  const apartmentsData = ref<Record<number, IApartment[]>>({});
  const allApartmentsCount = ref(0);
  const currentPage = ref(1);

  const allApartments = computed<IApartment[]>(() => Object.values(apartmentsData.value).flat());

  const addApartments = (data: IApartment[], count: number, isReset: boolean = false) => {
    if (isReset) {
      apartmentsData.value = { 1: [...data] };
    } else {
      apartmentsData.value[currentPage.value] = [...data];
    }

    allApartmentsCount.value = count;
  };

  return {
    allApartments,
    allApartmentsCount,
    currentPage,

    addApartments,
  };
});