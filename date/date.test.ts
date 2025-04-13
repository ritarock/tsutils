import * as DateUtil from "./date";

describe("toYYYYMMDD", () => {
  test("succeed", () => {
    const now = new Date(2025, 10, 10);
    const want = "20251010";
    const got = DateUtil.toYYYYMMDD(now);
    expect(got).toEqual(want);
  });
});

describe("toYYYY_MM_DD", () => {
  test("succeed", () => {
    const now = new Date(2025, 10, 10);
    const want = "2025-10-10";
    const got = DateUtil.toYYYY_MM_DD(now);
    expect(got).toEqual(want);
  });
});

describe("timeSpan", () => {
  test("succeed: to < from", () => {
    const from = new Date(2025, 10, 1, 0, 0, 0, 0);
    const to = new Date(2025, 10, 1, 9, 0, 0, 0);
    const want = 9;
    const got = DateUtil.timeSpan(from, to);
    expect(got).toEqual(want);
  });

  test("succeed: to > from", () => {
    const from = new Date(2025, 10, 1, 0, 1, 0, 0);
    const to = new Date(2025, 10, 1, 0, 0, 0, 0);
    const want = 0;
    const got = DateUtil.timeSpan(from, to);
    expect(got).toEqual(want);
  });
});

describe("getMonthStartDate", () => {
  test("succeed", () => {
    const date = new Date(2025, 10, 10);
    const want = new Date(2025, 10, 1);
    const got = DateUtil.getMonthStartDate(date);
    expect(got).toEqual(want);
  });
});

describe("getMonthEndDate", () => {
  test("succeed", () => {
    const october = 9;
    const date = new Date(2025, october, 10);
    const want = new Date(2025, october, 31);
    const got = DateUtil.getMonthEndDate(date);
    expect(got).toEqual(want);
  });
});

describe("getNextMonthDate", () => {
  test("succeed: 30th to 30th of next month", () => {
    const may = 4;
    const june = 5;
    const date = new Date(2025, may, 30);
    const want = new Date(2025, june, 30);
    const got = DateUtil.getNextMonthDate(date);
    expect(got).toEqual(want);
  });

  test("succeed: 31st to 30th of next month", () => {
    const may = 4;
    const june = 5;
    const date = new Date(2025, may, 31);
    const want = new Date(2025, june, 30);
    const got = DateUtil.getNextMonthDate(date);
    expect(got).toEqual(want);
  });
});
