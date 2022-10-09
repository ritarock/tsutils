import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as ArrayUtils from "./array.ts";

Deno.test("sortArray", () => {
  const arr = [5, 4, 3, 2, 1];
  const actual = ArrayUtils.sortArray(arr);
  const actualValue = actual[0];
  const expected = [1, 2, 3, 4, 5];
  const expectedValue = 1;
  assertArrayIncludes(actual, expected);
  assertEquals(actualValue, expectedValue);
});

Deno.test("reverseSortArray", () => {
  const arr = [1, 2, 3, 4, 5];
  const actual = ArrayUtils.reverseSortArray(arr);
  const actualValue = actual[0];
  const expected = [5, 4, 3, 2, 1];
  const expectedValue = 5;
  assertArrayIncludes(actual, expected);
  assertEquals(actualValue, expectedValue);
});

Deno.test("uniqueArray", () => {
  const arr = [1, 2, 3, 3, 4, 5];
  const actual = ArrayUtils.uniqueArray(arr);
  const actualValue = actual.length;
  const expected = [1, 2, 3, 4, 5];
  const expectedValue = arr.length - 1;
  assertArrayIncludes(actual, expected);
  assertEquals(actualValue, expectedValue);
});

Deno.test("maxOfArray", () => {
  const arr = [1, 2, 3, 4, 5];
  const actual = ArrayUtils.maxOfArray(arr);
  const expected = 5;
  assertEquals(actual, expected);
});

Deno.test("minOfArray", () => {
  const arr = [1, 2, 3, 4, 5];
  const actual = ArrayUtils.minOfArray(arr);
  const expected = 1;
  assertEquals(actual, expected);
});

Deno.test("sumOfArray", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = ArrayUtils.sumOfArray(arr);
  const expected = 55;
  assertEquals(actual, expected);
});

Deno.test("avarageOfArray", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = ArrayUtils.avarageOfArray(arr);
  const expected = 5.5;
  assertEquals(actual, expected);
});
