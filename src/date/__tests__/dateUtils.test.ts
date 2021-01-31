import { DateUtils } from '../';

describe('DateUtils', () => {
    const date = new Date(Date.now());

    it('toYYYYMMDD', () => {
        expect(DateUtils.toYYYYMMDD(date).length).toBe(8);
    });

    it('toHHMM', () => {
        expect(DateUtils.toHHMM(date).length).toBe(4);
    });

    it('nowYYYYMMDD', () => {
        expect(DateUtils.nowYYYYMMDD().length).toBe(8);
    });

    it('timeSpan', () => {
        const fromDate = new Date(2021, 1, 1, 0, 0, 0);
        const toDate = new Date(2021, 1, 1, 1, 0, 0);
        expect(DateUtils.timeSpan(fromDate, toDate)).toBe(3600);
    });
});
