import { createContext, useContext, useMemo, useState } from 'react'

interface FileContextType {
  pdfName: string
  setPdfName: (pdfName: string) => void
  file: File
  setFile: (file: File) => void
}

const FileContext = createContext<FileContextType | null>(null)

const FileContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [pdfName, setPdfName] = useState('')
  const [file, setFile] = useState<any>({})
  const value = useMemo(
    () => ({
      pdfName,
      setPdfName,
      file,
      setFile,
    }),
    [pdfName, file]
  )

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>
}
export default FileContextProvider

export const useFileContext = (): FileContextType =>
  useContext(FileContext) as FileContextType
