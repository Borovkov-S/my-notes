export const parseDateToTimestamp = (dateStr: string) => {
  const [day, month, year] = dateStr.split('.').map(Number)

  const date = new Date(year, month - 1, day)

  return date.getTime()
}