export const toTitleCase = (str: string) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );


export const numberFormat = (num: number, digit?:number) => {
  return num.toFixed(digit ?? 3);
}