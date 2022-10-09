import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { existsSync } from "https://deno.land/std@0.106.0/fs/mod.ts";
import * as FileUtils from "./file.ts";

Deno.test("read", () => {
  const actual = FileUtils.read("test_data/readfile.txt");
  const expected = "read file\n";
  assertEquals(actual, expected);
});

Deno.test("write", () => {
  const path = "test_data/write.txt";
  FileUtils.write(path, "write data");
  const actual = existsSync(path);
  const expected = true;
  assertEquals(actual, expected);
  FileUtils.removeFile(path);
});
