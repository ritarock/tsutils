import * as DateUtil from "./date";

test("toYYYYMMDD", () => {
  const now = new Date(2023, 8, 1, 0, 0, 0, 0);
  const expected = "20230801";
  const actual = DateUtil.toYYYYMMDD(now);
  expect(actual).toEqual(expected);
});

test("toYYYY_MM_DD", () => {
  const now = new Date(2023, 8, 1, 0, 0, 0, 0);
  const expected = "2023-08-01";
  const actual = DateUtil.toYYYY_MM_DD(now);
  expect(actual).toEqual(expected);
});

test("timeSpan", () => {
  const from = new Date(2023, 8, 1, 0, 0, 0, 0);
  const to = new Date(2023, 8, 1, 1, 0, 0, 0);
  const expected = 3600;
  const actual = DateUtil.timeSpan(from, to);
  expect(actual).toEqual(expected);
});

test("getBeginningOfMonth", () => {
  const now = new Date(2023, 8, 15, 0, 0, 0, 0);
  const expected = new Date(2023, 8, 1, 0, 0, 0, 0);
  const actual = DateUtil.getBeginningOfMonth(now);
  expect(DateUtil.toYYYYMMDD(actual)).toEqual(DateUtil.toYYYYMMDD(expected));
});

test("getEndMonth", () => {
  const august = 7;
  const now = new Date(2023, august, 15, 0, 0, 0, 0);
  const expected = new Date(2023, august, 31, 0, 0, 0, 0);
  const actual = DateUtil.getEndMonth(now);
  expect(actual).toEqual(expected);
});
