import apartments from '../../db/apartments.json';

export default defineEventHandler(async (event) => {
  const { page = 1 } = getQuery(event);
  const pageSize = 4;
  await new Promise(resolve => setTimeout(resolve, 1200));
  return {
    count: apartments.length,
    results: apartments.slice((Number(page) - 1) * pageSize, (Number(page) - 1) * pageSize + pageSize),
  };
});