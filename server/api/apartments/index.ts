import apartments from '../../db/apartments.json'

export default defineEventHandler(async () => {
  await new Promise(resolve => setTimeout(resolve, 1200));
  return apartments;
})