import { useState } from 'react'
import { elasticSearch } from '../../../services'
import { FilesDataType } from '../../../utils/interface'

const useHeader = () => {
  const [showOption, setShowOption] = useState<boolean>(true)
  const [showNotification, setShowNotification] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchDocuments, setSearchDocuments] = useState<FilesDataType[]>([])

  const handleNotificationClick = () => {
    setShowNotification(!showNotification)
  }

  const handleOptionClick = () => {
    setShowOption(!showOption)
  }

  const handleSearchChange = async (event: any) => {
    const searchQuery = event.target.value.toLowerCase()
    const result = await elasticSearch(searchQuery)

    setSearchDocuments(result)
    setSearchQuery(searchQuery)
  }

  return {
    showOption,
    showNotification,
    searchQuery,
    searchDocuments,
    setShowNotification,
    handleNotificationClick,
    handleOptionClick,
    handleSearchChange,
  }
}

export default useHeader
