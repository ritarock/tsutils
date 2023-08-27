export const sort = (array: number[]): number[] => {
  if (array.length === 0) return array;
  return array.sort((a, b) => a - b);
};

export const reverseSort = (array: number[]): number[] => {
  if (array.length === 0) return array;
  return array.sort((a, b) => b - a);
};

export const max = (array: number[]): number => {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => a > b ? a : b);
};

export const min = (array: number[]): number => {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => a < b ? a : b);
};

export const sum = (array: number[]): number => {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => {
    return a + b;
  });
};

export const mean = (array: number[]): number => {
  if (array.length === 0) return 0;
  return sum(array) / array.length;
};

export const median = (array: number[]): number => {
  const length = array.length;
  if (length === 0) return 0;

  const sorted = sort(array);
  if (length % 2 === 0) {
    const a = sorted[(length / 2) - 1];
    const b = sorted[length / 2];
    return (a + b) / 2;
  } else {
    return sorted[Math.trunc(length / 2)];
  }
};

export const mode = (array: number[]): number[] => {
  if (array.length === 0) return array;

  const m = new Map<number, number>();
  for (const v of array) {
    if (m.has(v)) {
      m.set(v, m.get(v)! + 1);
    } else {
      m.set(v, 1);
    }
  }

  const sortedMapByKey = new Map([...m.entries()].sort((a, b) => b[1] - a[1]));
  // get first key (one of the most frequent values) of sorted map
  const result: number[] = [sortedMapByKey.keys().next().value];
  const cnt = sortedMapByKey.get(result[0]);
  sortedMapByKey.delete(result[0]);

  for (const [key, value] of sortedMapByKey.entries()) {
    if (cnt !== value) {
      break;
    }
    result.push(key);
  }

  return result;
};

export const standardDeviation = (array: number[]): number => {
  if (array.length === 0) return 0;

  const meanValue = mean(array);
  const deviation: number[] = [];

  array.forEach((v, i) => {
    deviation[i] = v - meanValue;
  });

  const variance = ((deviation: number[]): number => {
    let sum = 0;
    deviation.forEach((v) => {
      sum += Math.pow(v, 2);
    });
    return sum / deviation.length;
  })(deviation);

  return Math.sqrt(variance);
};

export const unique = (array: number[]): number[] => {
  if (array.length === 0) return array;

  return Array.from(new Set(array));
};
