export function pluralize(number: number, forms: string[]): string | undefined {
  const cases: number[] = [2, 0, 1, 1, 1, 2];

  return forms[number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)] ?? 0];
}

export function formatNumber(number: number) {
  return number.toLocaleString();
}