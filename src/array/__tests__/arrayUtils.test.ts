import { ArrayUtils } from '../';

describe('ArrayUtils', () => {
    let array: number[] = [1, 2, 3];

    it('maxOfArray', () => {
        expect(ArrayUtils.maxOfArray(array)).toBe(3);
    });

    it('minOfArray', () => {
        expect(ArrayUtils.minOfArray(array)).toBe(1);
    });

    it('sumOfArray', () => {
        expect(ArrayUtils.sumOfArray(array)).toBe(6);
    });

    it('avarageOfArray', () => {
        expect(ArrayUtils.avarageOfArray(array)).toBe(2);
    });

    it('sortArray', () => {
        array = [3, 1, 2, 10, 22];
        const result: number[] = [1, 2, 3, 10, 22];
        expect(ArrayUtils.sortArray(array)).toEqual(result);
    });

    it('reverseSortArray', () => {
        array = [3, 1, 2, 10, 22];
        const result: number[] = [22, 10, 3, 2, 1];
        expect(ArrayUtils.reverseSortArray(array)).toEqual(result);
    });
});
