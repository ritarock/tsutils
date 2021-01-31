export const toYYYYMMDD = (date: Date): string => {
    return (
        String(date.getFullYear()) +
        ('0' + String(date.getMonth() + 1)).slice(-2) +
        ('0' + String(date.getDate())).slice(-2)
    );
};

export const toHHMM = (date: Date): string => {
    return (
        ('00' + String(date.getHours())).slice(-2) +
        ('00' + String(date.getMinutes())).slice(-2)
    );
};

export const nowYYYYMMDD = (): string => {
    const now = new Date(Date.now());
    return toYYYYMMDD(now);
};

export const timeSpan = (from: Date, to: Date): number => {
    return Math.floor((to.getTime() - from.getTime()) / 1000);
};
