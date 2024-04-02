import { createContext, useContext, useMemo, useState } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const value = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
    }),
    [isAuthenticated]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthContextProvider

export const useAuthContext = (): AuthContextType =>
  useContext(AuthContext) as AuthContextType
