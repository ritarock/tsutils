import fs from "fs";

export const read = (path: string): Promise<string> => {
  return new Promise((resolve) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
};

export const write = (path: string, data: string): Promise<void> => {
  return new Promise((resolve) => {
    fs.writeFile(path, data, (err) => {
      if (err) throw err;
      resolve();
    });
  });
};
