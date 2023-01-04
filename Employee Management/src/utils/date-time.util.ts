export const formateDate = (date: Date): string => {
  const yyyy = date.getFullYear().toString();
  let mm = (date.getMonth() + 1).toString();
  let dd = date.getDate().toString();
  
  if (parseInt(dd) < 10) dd = '0' + dd;
  if (parseInt(mm) < 10) mm = '0' + mm;
  
  return `${dd}-${dd}-${yyyy}`;
}