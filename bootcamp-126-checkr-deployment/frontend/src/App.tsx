import './styles.css'
import React, { createContext, useMemo, useState } from 'react'
import Theme from './theme'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import CandidateDetails from './pages/CandidateDetails'
import CandidatesPage from './pages/CandidatePage'
import AdverseActionPage from './pages/AdverseActionPage'
import { DashboardContextType } from './utils/types'
import SignupPage from './pages/SignupPage'
import ChangePasswordPage from './pages/ChangePassword'
import { useAuth0 } from '@auth0/auth0-react'
import NotFound from './pages/NotFound'

export const DashboardContext = createContext<DashboardContextType>({
  dashboardRefresh: true,
  setDashboardRefresh: (value) => {},
})

export const App = () => {
  const { isLoading, isAuthenticated } = useAuth0()
  const [dashboardRefresh, setDashboardRefresh] = useState(true)
  const loadDashboardValue = useMemo(
    () => ({
      dashboardRefresh,
      setDashboardRefresh,
    }),
    [dashboardRefresh, setDashboardRefresh]
  )

  return (
    <BrowserRouter>
      <DashboardContext.Provider value={loadDashboardValue}>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route path="/" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/forgotpassword" element={<ChangePasswordPage />} />
            {(isLoading || isAuthenticated) && (
              <React.Fragment>
                <Route
                  path="/candidatedetails"
                  element={<CandidateDetails />}
                />
                <Route path="/adverseactions" element={<AdverseActionPage />} />
                <Route path="/dashboard" element={<CandidatesPage />} />
              </React.Fragment>
            )}
          </Routes>
        </ThemeProvider>
      </DashboardContext.Provider>
    </BrowserRouter>
  )
}
