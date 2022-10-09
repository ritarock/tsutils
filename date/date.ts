export const toYYYYMMDD = (date: Date) => {
  return `${date.getFullYear()}${("0" + date.getMonth()).slice(-2)}${
    ("0" + date.getDate()).slice(-2)
  }`;
};

export const toHHMM = (date: Date) => {
  return `${("00" + date.getHours()).slice(-2)}${
    ("00" + date.getMinutes()).slice(-2)
  }`;
};

export const timeSpan = (from: Date, to: Date) => {
  return Math.floor((to.getTime() - from.getTime()) / 1000);
};

export const toYYYY_MM_DD = (date: Date) => {
  return `${date.getFullYear()}-${("0" + date.getMonth()).slice(-2)}-${
    ("0" + date.getDate()).slice(-2)
  }`;
};

export const toYYYY_MM_DD_HH_MM_SS = (date: Date) => {
  return `${date.getFullYear()}-${("0" + date.getMonth()).slice(-2)}-${
    ("0" + date.getDate()).slice(-2)
  } ${("00" + date.getHours()).slice(-2)}:${
    ("00" + date.getMinutes()).slice(-2)
  }:${("00" + date.getSeconds()).slice(-2)}`;
};

export const getBeginningOfMonth = (date: Date) => {
  const t = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
  return toYYYYMMDD(t);
};

export const getEndOfMonth = (date: Date) => {
  const t = new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0, 0);
  t.setMinutes(t.getMinutes() - 1);
  return toYYYYMMDD(t);
};
