import type { IApartment, IGetApartmentFilters } from '~/types/apartment';
import type { IPaginatedData } from '~/types/request';

export const getApartments = (filters?: IGetApartmentFilters) => useFetch<IPaginatedData<IApartment>>('/api/apartments', {
  lazy: true,
  query: {
    ...filters,
  },
});

export const getApartmentById = (id: number) => useFetch<IApartment>(`/api/apartments/${id}`);