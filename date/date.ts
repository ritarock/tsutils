export const toYYYYMMDD = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = ("0" + (date.getMonth())).slice(-2);
  const dd = ("0" + (date.getDate())).slice(-2);

  return yyyy + mm + dd;
};

export const toYYYY_MM_DD = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = ("0" + (date.getMonth())).slice(-2);
  const dd = ("0" + (date.getDate())).slice(-2);

  return `${yyyy}-${mm}-${dd}`;
};

export const timeSpan = (from: Date, to: Date): number => {
  return Math.floor((to.getTime() - from.getTime()) / 1000);
};

export const getBeginningOfMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
};

export const getEndMonth = (date: Date): Date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();

  return new Date(year, month, lastDay);
};
