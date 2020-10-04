import { ArrayUtil } from "../";

describe("ArrayUtil", () => {
  const data = [1, 2, 3, 3, 4, 5];

  it("uniue", () => {
    expect(ArrayUtil.unique(data)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
