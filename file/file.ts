import { promises as fs } from "fs";

export const read = async (path: string): Promise<string> => {
  try {
    const data = await fs.readFile(path, "utf-8");
    return data;
  } catch (err) {
    throw err;
  }
};

export const write = async (path: string, data: string): Promise<void> => {
  try {
    await fs.appendFile(path, data);
  } catch (err) {
    throw err;
  }
};
