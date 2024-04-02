import dayjs, { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'

interface FilterValues {
  startDate: string
  endDate: string
  fileType: string
  publishedBy: string
}

interface FilterRowProps {
  onAddFileClick: () => void
  onFilterChange: (filterValues: FilterValues) => void
}

const useFilterHook = (props: FilterRowProps) => {
  const [selectedFromDate, setSelectedFromDate] = useState<string>('')
  const [selectedToDate, setSelectedToDate] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [selectedPublishValue, setSelectedPublishValue] =
    useState('Published By')
  const [selectedFileValue, setSelectedFileValue] = useState('File type')

  useEffect(() => {
    const currentFilterValues: FilterValues = {
      startDate: selectedFromDate,
      endDate: selectedToDate,
      fileType: selectedFileValue,
      publishedBy: selectedPublishValue,
    }
    props.onFilterChange(currentFilterValues)
  }, [
    selectedFromDate,
    selectedToDate,
    selectedPublishValue,
    selectedFileValue,
  ])

  const handleStartDateChange = (date: Date | Dayjs | null) => {
    const tempDate: Dayjs = dayjs(date as string | Date)
    const formatDate = tempDate.format('MM-DD-YYYY')
    setSelectedFromDate(formatDate)
    if (formatDate > selectedToDate) {
      setError('From date cannot be greater than to date.')
    } else {
      setError('')
    }
  }

  const handleEndDateChange = (date: Date | Dayjs | null) => {
    const tempDate: Dayjs = dayjs(date as string | Date)
    const formatDate = tempDate.format('MM-DD-YYYY')
    setSelectedToDate(formatDate)
    if (selectedFromDate > formatDate) {
      setError('From date cannot be greater than to date.')
    } else {
      setError('')
    }
  }

  const handleFileValueChange = (value: string) => {
    setSelectedFileValue(value)
  }

  const handlePublishValueChange = (value: string) => {
    setSelectedPublishValue(value)
  }
  return {
    selectedPublishValue,
    handlePublishValueChange,
    selectedFileValue,
    handleFileValueChange,
    error,
    handleStartDateChange,
    handleEndDateChange,
  }
}

export default useFilterHook
