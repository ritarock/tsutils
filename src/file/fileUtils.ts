import fs from 'fs';
import { resolve } from 'path';

export const read = async (path: string): Promise<string> => {
    return new Promise((resolve) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) throw err;
            resolve(data);
        });
    });
};

export const exists = (path: string): boolean => {
    return fs.existsSync(path);
};

export const write = async (path: string, data: string): Promise<void> => {
    return new Promise((resolve) => {
        fs.writeFile(path, data, (err) => {
            if (err) throw err;
            resolve();
        });
    });
};

export const removeFile = (path: string): Promise<void> => {
    return new Promise((resolve) => {
        fs.unlink(path, (err) => {
            if (err) throw err;
            resolve();
        });
    });
};

export const makeDir = async (path: string): Promise<void> => {
    return new Promise((resolve) => {
        fs.mkdir(path, { recursive: true }, (err) => {
            if (err) throw err;
            resolve();
        });
    });
};

export const removeDir = async (path: string): Promise<void> => {
    return new Promise((resolve) => {
        fs.rmdir(path, { recursive: true }, (err) => {
            if (err) throw err;
            resolve();
        });
    });
};

export const reName = async (
    oldPath: string,
    newPath: string
): Promise<void> => {
    fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        resolve();
    });
};

export const copy = async (
    srcPath: string,
    destPath: string
): Promise<void> => {
    fs.copyFile(srcPath, destPath, (err) => {
        if (err) throw err;
        resolve();
    });
};
