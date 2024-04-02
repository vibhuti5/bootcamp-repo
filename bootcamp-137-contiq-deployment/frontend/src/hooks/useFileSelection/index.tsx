import { useState } from 'react'
import { IFile } from '../../utils/interface'

export const useFileSelection = () => {
  const [selectedFiles, setSelectedFiles] = useState<IFile[]>([])
  const handleCheck = (file: IFile) => {
    const isChecked = selectedFiles.some(
      (checkedFile) => checkedFile.id === file.id
    )
    const newSelectedFiles = isChecked
      ? selectedFiles.filter((checkedFile) => checkedFile.id !== file.id)
      : [...selectedFiles, file]

    setSelectedFiles(newSelectedFiles)
  }
  return { selectedFiles, handleCheck }
}
