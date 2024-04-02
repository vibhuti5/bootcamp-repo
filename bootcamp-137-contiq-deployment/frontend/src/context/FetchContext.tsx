import { createContext, useMemo, useState } from 'react'

interface ContextType {
  post: number
  setPost: (currentSongIndex: number) => void
}
export const FetchContext = createContext<ContextType>({
  post: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setPost: (_index: number) => {},
})

export const FetchfilesProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [post, setPost] = useState<number>(0)

  const contextValue = useMemo(() => ({ post, setPost }), [post, setPost])

  return (
    <FetchContext.Provider value={contextValue}>
      {children}
    </FetchContext.Provider>
  )
}
