export const read = (path: string) => {
  const text = Deno.readTextFileSync(path);
  return text;
};

export const write = (path: string, date: string) => {
  Deno.writeTextFileSync(path, date);
};

export const removeFile = (path: string) => {
  Deno.removeSync(path, { recursive: true });
};

export const makeDir = (path: string) => {
  Deno.mkdirSync(path, { recursive: true });
};

export const removeDir = (path: string) => {
  removeFile(path);
};
