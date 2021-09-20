import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as DateUtils from "./date_utils.ts";

Deno.test("toYYYYMMDD", () => {
  const date = new Date(2021, 1, 1, 0, 0, 0, 0);
  const actual = DateUtils.toYYYYMMDD(date);
  const expected = "20210101";
  assertEquals(actual, expected);
});

Deno.test("toHHMM", () => {
  const date = new Date(2021, 1, 1, 0, 0, 0, 0);
  const actual = DateUtils.toHHMM(date);
  const expected = "0000";
  assertEquals(actual, expected);
});

Deno.test("timeSpan", () => {
  const from = new Date(2021, 1, 1, 0, 0, 0, 0);
  const to = new Date(2021, 1, 1, 1, 0, 0, 0);
  const actual = DateUtils.timeSpan(from, to);
  const expected = 3600;
  assertEquals(actual, expected);
});

Deno.test("toYYYY_MM_DD", () => {
  const date = new Date(2021, 1, 1, 0, 0, 0, 0);
  const actual = DateUtils.toYYYY_MM_DD(date);
  const expected = "2021-01-01";
  assertEquals(actual, expected);
});

Deno.test("toYYYY_MM_DD_HH_MM_SS", () => {
  const date = new Date(2021, 1, 1, 0, 0, 0, 0);
  const actual = DateUtils.toYYYY_MM_DD_HH_MM_SS(date);
  const expected = "2021-01-01 00:00:00";
  assertEquals(actual, expected);
});

Deno.test("getBeginningOfMonth", () => {
  const actual = DateUtils.getBeginningOfMonth();
  const expected = "20210901";
  assertEquals(actual, expected);
});

Deno.test("getEndOfMonth", () => {
  const actual = DateUtils.getEndOfMonth();
  const expected = "20210931";
  assertEquals(actual, expected);
});
