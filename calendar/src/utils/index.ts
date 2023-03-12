export const numberToArray = (number: number | string) => Array.from({ length: Number(number) }, (_, i) => i + 1);
