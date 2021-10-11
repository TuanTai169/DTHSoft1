const convertDate = (date) => {
  if (!date) return ""
  return date.split("T")[0]
}

module.exports = convertDate
