import path from "path";
import os from "os";
import * as FileUtil from "./file";
import { promises as fs, read, write } from "fs";

describe("read", () => {
  let tmpFilePath: string;

  beforeEach(async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "test_read"));
    tmpFilePath = path.join(tmpDir, "sample.txt");
    await fs.writeFile(tmpFilePath, "This is test file");
  });

  afterEach(async () => {
    await fs.unlink(tmpFilePath);
    await fs.rmdir(path.dirname(tmpFilePath));
  });

  it("succeed", async () => {
    const want = "This is test file";
    const got = await FileUtil.read(tmpFilePath);
    expect(got).toEqual(want);
  });

  it("failed: not exists read file", async () => {
    await expect(FileUtil.read("tmpFile")).rejects.toThrow();
  });
});

describe("write", () => {
  let tmpFilePath: string;

  beforeEach(async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "test_read"));
    tmpFilePath = path.join(tmpDir, "sample.txt");
  });

  afterEach(async () => {
    await fs.unlink(tmpFilePath);
    await fs.rmdir(path.dirname(tmpFilePath));
  });

  it("succeed", async () => {
    await expect(
      FileUtil.write(tmpFilePath, "some data"),
    ).resolves.toBeUndefined();
  });
});
