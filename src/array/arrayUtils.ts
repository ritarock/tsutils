export const maxOfArray = (array: number[]): number => {
    return array.reduce((a, b) => (a > b ? a : b));
};

export const minOfArray = (array: number[]): number => {
    return array.reduce((a, b) => (a < b ? a : b));
};

export const sumOfArray = (array: number[]): number => {
    return array.reduce((a, b) => {
        return a + b;
    });
};

export const avarageOfArray = (array: number[]): number => {
    return sumOfArray(array) / array.length;
};

export const sortArray = (array: number[]): number[] => {
    return array.sort((a, b) => a - b);
};

export const reverseSortArray = (array: number[]): number[] => {
    return array.sort((a, b) => b - a);
};
