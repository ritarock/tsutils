export const sortArray = (array: number[]) => {
  return array.sort((a, b) => a - b);
};

export const reverseSortArray = (array: number[]) => {
  return array.sort((a, b) => b - a);
};

export const uniqueArray = <T>(array: Array<T>) => {
  const setArray = new Set(array);
  return [...setArray];
};

export const maxOfArray = (array: number[]) => {
  return array.reduce((a, b) => (a > b ? a : b));
};

export const minOfArray = (array: number[]) => {
  return array.reduce((a, b) => (a < b ? a : b));
};

export const sumOfArray = (array: number[]) => {
  return array.reduce((a, b) => {
    return a + b;
  });
};

export const avarageOfArray = (array: number[]) => {
  return sumOfArray(array) / array.length;
};
