export const toYYYYMMDD = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = ("0" + date.getMonth()).slice(-2);
  const dd = ("0" + date.getDate()).slice(-2);

  return `${yyyy}${mm}${dd}`;
};

export const toYYYY_MM_DD = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = ("0" + date.getMonth()).slice(-2);
  const dd = ("0" + date.getDate()).slice(-2);

  return `${yyyy}-${mm}-${dd}`;
};

export const timeSpan = (from: Date, to: Date): number => {
  const f = new Date(
    from.getFullYear(),
    from.getMonth(),
    from.getDate(),
    from.getHours(),
  );
  const t = new Date(
    to.getFullYear(),
    to.getMonth(),
    to.getDate(),
    to.getHours(),
  );

  const diff = (t.getTime() - f.getTime()) / (1000 * 60 * 60);
  if (diff < 0) {
    return 0;
  }
  return diff;
};

export const getMonthStartDate = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
};

export const getMonthEndDate = (date: Date): Date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();

  return new Date(year, month, lastDay);
};

export const getNextMonthDate = (date: Date): Date => {
  const day = date.getDate();
  const next = new Date(date.getFullYear(), date.getMonth() + 1, day);

  if (next.getDate() !== day) {
    return new Date(date.getFullYear(), date.getMonth() + 2, 0);
  }

  return next;
};
