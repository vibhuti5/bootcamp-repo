import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SetupLayout } from './contextRouting/layout'
import { FileViewerPage } from './pages/FIleViewer'
import FilePage from './pages/FilePage'
import { ForgotPasswordPage } from './pages/ForgotPassword'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/Signup'
import './styles.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SetupLayout />}>
          <Route path="/" element={<Navigate to="/sign-in" />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/files" element={<FilePage />} />
          <Route path="/file-viewer/:id" element={<FileViewerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
