type Sortable = string | number | bigint;

export const sort = <T extends Sortable>(array: T[]): T[] => {
  return array.sort((a, b) => {
    return a > b ? 1 : a === b ? 0 : -1;
  });
};

export const reverseSort = <T extends Sortable>(array: T[]): T[] => {
  return array.sort((a, b) => {
    return a < b ? 1 : a === b ? 0 : -1;
  });
};

export const unique = <T>(array: T[]): T[] => {
  const set = new Set(array);
  return Array.from(set);
};

export const max = (array: number[]): number => {
  if (array.length === 0) return 0;
  return Math.max(...array);
};

export const min = (array: number[]): number => {
  if (array.length === 0) return 0;
  return Math.min(...array);
};

export const sum = (array: number[]): number => {
  return array.reduce((pre, cur) => pre + cur, 0);
};

export const average = (array: number[]): number => {
  if (array.length === 0) return 0;
  return sum(array) / array.length;
};

export const median = (array: number[]): number => {
  const n = array.length;
  if (n === 0) return 0;

  const sorted = sort([...array]);
  const mid = Math.floor(sorted.length / 2);
  if (n % 2 === 1) return sorted[mid];
  return (sorted[mid - 1] + sorted[mid]) / 2;
};

export const mode = <T>(array: T[]): T[] => {
  if (array.length === 0) return array;
  const freqMap = new Map<T, number>();
  for (const item of array) {
    freqMap.set(item, (freqMap.get(item) || 0) + 1);
  }

  const maxFreq = Math.max(...freqMap.values());
  const modes: T[] = [];
  for (const [item, freq] of freqMap.entries()) {
    if (freq === maxFreq) {
      modes.push(item);
    }
  }

  return modes;
};
