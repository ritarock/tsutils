import * as ArrayUtil from "./array";

test("sort(): array length === 0", () => {
  const arr: number[] = [];
  const expected: number[] = [];
  const actual = ArrayUtil.sort(arr);
  expect(actual.length).toEqual(expected.length);
});

test("sort()", () => {
  const arr = [5, 4, 3, 2, 1];
  const expected = [1, 2, 3, 4, 5];
  const actual = ArrayUtil.sort(arr);
  expect(actual).toEqual(expected);
  expect(actual[0]).toEqual(expected[0]);
});

test("reverseSort(): array length === 0", () => {
  const arr: number[] = [];
  const expected: number[] = [];
  const actual = ArrayUtil.reverseSort(arr);
  expect(actual.length).toEqual(expected.length);
});

test("reverseSort()", () => {
  const arr = [1, 2, 3, 4, 5];
  const expected = [5, 4, 3, 2, 1];
  const actual = ArrayUtil.reverseSort(arr);
  expect(actual).toEqual(expected);
  expect(actual[0]).toEqual(expected[0]);
});

test("max(): array length === 0", () => {
  const arr: number[] = [];
  const expected = 0;
  const actual = ArrayUtil.max(arr);
  expect(actual).toEqual(expected);
});

test("max()", () => {
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  const expected = 5;
  const actual = ArrayUtil.max(arr);
  expect(actual).toEqual(expected);
});

test("min(): array length === 0", () => {
  const arr: number[] = [];
  const expected = 0;
  const actual = ArrayUtil.min(arr);
  expect(actual).toEqual(expected);
});

test("min()", () => {
  const arr = [5, 4, 3, 2, 1, 2, 3, 4, 5];
  const expected = 1;
  const actual = ArrayUtil.min(arr);
  expect(actual).toEqual(expected);
});

test("sum(): array length === 0", () => {
  const arr: number[] = [];
  const expected = 0;
  const actual = ArrayUtil.sum(arr);
  expect(actual).toEqual(expected);
});

test("sum()", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expected = 55;
  const actual = ArrayUtil.sum(arr);
  expect(actual).toEqual(expected);
});

test("mean(): array length === 0", () => {
  const arr: number[] = [];
  const expected = 0;
  const actual = ArrayUtil.mean(arr);
  expect(actual).toEqual(expected);
});

test("mean()", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expected = 5.5;
  const actual = ArrayUtil.mean(arr);
  expect(actual).toEqual(expected);
});

test("median(): array length === 0", () => {
  const arr: number[] = [];
  const expected = 0;
  const actual = ArrayUtil.median(arr);
  expect(actual).toEqual(expected);
});

test("median(): array length is even", () => {
  const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
  const expected = 4;
  const actual = ArrayUtil.median(arr);
  expect(actual).toEqual(expected);
});

test("median(): array length is odd", () => {
  const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21];
  const expected = 3;
  const actual = ArrayUtil.median(arr);
  expect(actual).toEqual(expected);
});

test("mode(): array length === 0", () => {
  const arr: number[] = [];
  const expected: number[] = [];
  const actual = ArrayUtil.mode(arr);
  expect(actual).toEqual(expected);
});

test("mode(): one mode", () => {
  const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21];
  const expected = [1];
  const actual = ArrayUtil.mode(arr);
  expect(actual).toEqual(expected);
});

test("mode(): two mode", () => {
  const arr = [0, 0, 1, 1, 2, 3, 5, 8, 13, 21];
  const expected = [0, 1];
  const actual = ArrayUtil.mode(arr);
  expect(actual).toEqual(expected);
});

test("standardDeviation(): array length === 0", () => {
  const arr: number[] = [];
  const expected = 0;
  const actual = ArrayUtil.standardDeviation(arr);
  expect(actual).toEqual(expected);
});

test("standardDeviation()", () => {
  const arr = [55, 55, 60, 65, 65];
  const expected = 4.472135955;
  let actual = ArrayUtil.standardDeviation(arr);
  actual = Math.round(actual * 10000000000) / 10000000000;
  expect(actual).toEqual(expected);
});

test("unique(): array length === 0", () => {
  const arr: number[] = [];
  const expected: number[] = [];
  const actual = ArrayUtil.unique(arr);
  expect(actual).toEqual(expected);
});

test("unique()", () => {
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
  const expected = [1, 2, 3, 4, 5];
  const actual = ArrayUtil.unique(arr);
  expect(actual).toEqual(expected);
});
