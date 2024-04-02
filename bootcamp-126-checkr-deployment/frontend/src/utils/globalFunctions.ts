export const CloseModal = (
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setOpen(false)
}
export const ConvertDateTimeToDate = (date: string | number | Date) => {
  const inputDate = new Date(date)

  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0')
  const day = inputDate.getDate().toString().padStart(2, '0')
  const year = inputDate.getFullYear()

  const formattedDate = `${month}/${day}/${year}`

  return formattedDate
}

export const ConvertDateTimeToLocalDate = (
  timestamp: string | number | Date
) => {
  const date = new Date(timestamp)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }
  return date.toLocaleString('en-US', options)
}

export const CalculateTurnAroundTime = (
  startDateStr: string | number | Date,
  endDateStr: string | number | Date
) => {
  const startDate = new Date(startDateStr)
  const endDate = new Date(endDateStr)

  const timeDifference = endDate.getTime() - startDate.getTime()

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const remainingTime = timeDifference % (1000 * 60 * 60 * 24)
  const hours = Math.floor(remainingTime / (1000 * 60 * 60))

  let result = ''
  if (days > 0) {
    result += `${days} Day${days > 1 ? 's' : ''}, `
  }
  if (hours > 0) {
    result += `${hours} Hour${hours > 1 ? 's' : ''}`
  }

  return result
}

export const DateToMMDDYYYY = (dateString: string | number | Date) => {
  const date = new Date(dateString)
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Months are zero-based
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear()

  return `${month}/${day}/${year}`
}
