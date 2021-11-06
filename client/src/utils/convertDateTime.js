export const convertStringToDate = (date) => {
  const dt = new Date(date)
  const fmDate =
    ("00" + dt.getDate()).slice(-2) +
    "/" +
    ("00" + (dt.getMonth() + 1)).slice(-2) +
    "/" +
    dt.getFullYear() +
    " " +
    ("00" + dt.getHours()).slice(-2) +
    ":" +
    ("00" + dt.getMinutes()).slice(-2) +
    ":" +
    ("00" + dt.getSeconds()).slice(-2)
  return fmDate
}
