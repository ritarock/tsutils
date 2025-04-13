import * as ArrayUtil from "./array";

describe("sort", () => {
  it("succeed: empty array", () => {
    const array: number[] = [];
    const want: number[] = [];
    const got = ArrayUtil.sort(array);
    expect(got).toEqual(want);
  });

  it("succeed", () => {
    const array = [5, 4, 3, 2, 1];
    const want = [1, 2, 3, 4, 5];
    const got = ArrayUtil.sort(array);
    expect(got).toEqual(want);
  });
});

describe("reverseSort", () => {
  it("succeed: empty array", () => {
    const array: number[] = [];
    const want: number[] = [];
    const got = ArrayUtil.reverseSort(array);
    expect(got).toEqual(want);
  });

  it("succeed", () => {
    const array = [1, 2, 3, 4, 5];
    const want = [5, 4, 3, 2, 1];
    const got = ArrayUtil.reverseSort(array);
    expect(got).toEqual(want);
  });
});

describe("unique", () => {
  it("succeed: empty array", () => {
    const array: number[] = [];
    const want: number[] = [];
    const got = ArrayUtil.unique(array);
    expect(got).toEqual(want);
  });

  it("succeed", () => {
    const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
    const want = [1, 2, 3, 4, 5];
    const got = ArrayUtil.unique(array);
    expect(got).toEqual(want);
  });
});

describe("max", () => {
  it("succeed: empty array", () => {
    const array: number[] = [];
    const want = 0;
    const got = ArrayUtil.max(array);
    expect(got).toEqual(want);
  });

  it("succeed", () => {
    const array = [1, 2, 3, 4, 5];
    const want = 5;
    const got = ArrayUtil.max(array);
    expect(got).toEqual(want);
  });
});

describe("min", () => {
  it("succeed: empty array", () => {
    const array: number[] = [];
    const want = 0;
    const got = ArrayUtil.min(array);
    expect(got).toEqual(want);
  });

  it("succeed", () => {
    const array = [1, 2, 3, 4, 5];
    const want = 1;
    const got = ArrayUtil.min(array);
    expect(got).toEqual(want);
  });
});

describe("sum", () => {
  it("succeed: empty array", () => {
    const array: number[] = [];
    const want = 0;
    const got = ArrayUtil.sum(array);
    expect(got).toEqual(want);
  });

  it("succeed", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const want = 55;
    const got = ArrayUtil.sum(array);
    expect(got).toEqual(want);
  });
});

describe("average", () => {
  it("succeed: empty array", () => {
    const array: number[] = [];
    const want = 0;
    const got = ArrayUtil.average(array);
    expect(got).toEqual(want);
  });

  it("succeed", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const want = 5.5;
    const got = ArrayUtil.average(array);
    expect(got).toEqual(want);
  });
});

describe("median", () => {
  it("succeed: empty array", () => {
    const array: number[] = [];
    const want = 0;
    const got = ArrayUtil.median(array);
    expect(got).toEqual(want);
  });

  it("succeed: slice length is odd", () => {
    const array = [1, 1, 2, 3, 5, 8, 13, 21, 34];
    const want = 5;
    const got = ArrayUtil.median(array);
    expect(got).toEqual(want);
  });

  it("succeed: slice length is even", () => {
    const array = [1, 1, 2, 3, 5, 8, 13, 21];
    const want = 4;
    const got = ArrayUtil.median(array);
    expect(got).toEqual(want);
  });
});

describe("mode", () => {
  it("succeed: empty array", () => {
    const array: number[] = [];
    const want: number[] = [];
    const got = ArrayUtil.mode(array);
    expect(got).toEqual(want);
  });

  it("succeed: return one value", () => {
    const array = [1, 1, 2, 3, 4, 5, 6, 7];
    const want = [1];
    const got = ArrayUtil.mode(array);
    expect(got).toEqual(want);
  });

  it("succeed: return two value", () => {
    const array = [1, 1, 2, 3, 4, 5, 6, 7, 7];
    const want = [1, 7];
    const got = ArrayUtil.mode(array);
    expect(got).toEqual(want);
  });
});
