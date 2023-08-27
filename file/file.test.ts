import * as FileUtil from "./file";

test("read", async () => {
  const expected = "This is test file.\n";
  const actual = await FileUtil.read("./fixtures/test.txt");
  expect(actual).toEqual(expected);
});
