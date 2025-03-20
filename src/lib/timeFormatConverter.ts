export const timeFormatConverter = (time: string) => {
  const date = new Date(time);

  const year = date.getFullYear().toString().slice(-4);

  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  const day = date.getDate().toString().padStart(2, "0");

  return `${year}/${month}/${day}`;
};
