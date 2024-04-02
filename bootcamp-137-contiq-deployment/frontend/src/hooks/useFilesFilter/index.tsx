import { useContext, useEffect, useState } from 'react'
import { FilterValues } from '../../components/organisms/FilterRow'
import { FetchContext } from '../../context/FetchContext'
import { useData } from '../../context/UserContext'
import { getAllFiles } from '../../services'
import { IFile } from '../../utils/interface'

const useFileFilter = () => {
  const [files, setFiles] = useState<IFile[]>([])
  const [filteredFiles, setFilteredFiles] = useState<IFile[]>([])
  const { post } = useContext(FetchContext)
  const { data } = useData()

  useEffect(() => {
    getAllFiles()
      .then((res) => {
        setFiles(res)
        setFilteredFiles(res)
      })
      .catch((error) => console.error(error))
  }, [post])
  const handleFilterChange = (filterType: FilterValues) => {
    console.log(filterType)
    const updatedFilteredFiles = files.filter((file) => {
      const fileDate = new Date(file.createdAt)
      const fileType = file.fileType?.split('/')[1].toUpperCase()
      console.log(file.fileType?.split('/')[1].toUpperCase())
      fileDate.setHours(0, 0, 0, 0)
      const filterStartDate = new Date(filterType.startDate)
      filterStartDate.setHours(0, 0, 0, 0)
      const filterEndDate = new Date(filterType.startDate)
      filterEndDate.setHours(0, 0, 0, 0)
      const meetsFileTypeCriteria =
        filterType.fileType === 'File type' || fileType === filterType.fileType
      const meetsStartDateCriteria =
        filterType.startDate === '' ||
        filterType.startDate === 'Invalid Date' ||
        fileDate.getTime() >= filterStartDate.getTime()
      const meetsEndDateCriteria =
        filterType.endDate === '' ||
        filterType.startDate === 'Invalid Date' ||
        fileDate.getTime() >= filterEndDate.getTime()
      const meetPulishedBymeCriteria =
        filterType.publishedBy === 'Published By' ||
        filterType.publishedBy === 'Published by me' ||
        file.userId != data.loggedInUserId
      const meetPulishedBymeCriteriaByOthers =
        filterType.publishedBy === 'Published By' ||
        filterType.publishedBy === 'Published by others' ||
        file.userId === data.loggedInUserId

      return (
        meetsFileTypeCriteria &&
        meetsStartDateCriteria &&
        meetsEndDateCriteria &&
        meetPulishedBymeCriteria &&
        meetPulishedBymeCriteriaByOthers
      )
    })

    setFilteredFiles(updatedFilteredFiles)
  }

  return { filteredFiles, handleFilterChange }
}

export default useFileFilter
