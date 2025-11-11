import type { IApartment } from '~/types/apartment';

export const getApartments = () => useFetch<IApartment[]>('/api/apartments')

export const getApartmentById = (id: number) => useFetch<IApartment>('/api/apartments', {
  query: { id },
})