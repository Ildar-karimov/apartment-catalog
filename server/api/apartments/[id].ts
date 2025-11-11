import apartments from '../../db/apartments.json'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'));
  const selectedApartment = apartments.find(apartment => apartment.id === id);

  await new Promise(resolve => setTimeout(resolve, 1200));

  if (!selectedApartment) {
    throw createError({
      statusCode: 404,
      message: 'Объект не найден',
    })
  }

  return selectedApartment;
})