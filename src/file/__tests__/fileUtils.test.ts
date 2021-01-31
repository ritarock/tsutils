import { FileUtils } from '../';

describe('FileUtils', () => {
    it('read', async () => {
        expect(await FileUtils.read('test_data/read_file.txt')).toBe(
            'read file\n'
        );
    });

    it('exists', () => {
        expect(FileUtils.exists('test_data/read_file.txt')).toBe(true);
    });

    it('write', async () => {
        const path = 'test_data/write_file.txt';
        const text = 'write file';
        await FileUtils.write(path, text);
        const result: string = await FileUtils.read(path);
        expect(result).toBe(text);
    });

    it('removeFile', async () => {
        const path = 'test_data/write_file.txt';
        await FileUtils.write(path, 'test');
        await FileUtils.removeFile(path);
        expect(await FileUtils.exists(path)).toBe(false);
    });

    it('makeDir', async () => {
        const path = 'test_data/tmp';
        await FileUtils.makeDir(path);
        expect(await FileUtils.exists(path)).toBe(true);
    });

    it('removeDir', async () => {
        const path = 'test_data/tmp';
        await FileUtils.removeDir(path);
        expect(await FileUtils.exists(path)).toBe(false);
    });

    it('reName', async () => {
        const oldPath = 'test_data/old_file.txt';
        const newPath = 'test_data/new_file.txt';
        await FileUtils.write(oldPath, 'test');
        await FileUtils.reName(oldPath, newPath);
        expect(await FileUtils.exists(newPath)).toBe(true);
    });

    it('copy', async () => {
        const srcPath = 'test_data/new_file.txt';
        const destPath = 'test_data/dest_file.txt';
        await FileUtils.copy(srcPath, destPath);
        expect(await FileUtils.exists(destPath)).toBe(true);
    });
});
