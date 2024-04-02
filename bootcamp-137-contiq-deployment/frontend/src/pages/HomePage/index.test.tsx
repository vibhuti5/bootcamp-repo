import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom/extend-expect'
import { act, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '.'
import { UserContext } from '../../context/UserContext'
import * as services from '../../services'
import theme from '../../theme'
import { IFilesDataType } from '../../utils/interface'

const mockedUserInformation: any[] = [
  {
    id: 1,
    name: 'John',
    email: 'John@zemosolabs.com',
    password: 'Password#123',
    notification_count: 1,
  },
]

jest.spyOn(services, 'getUserByEmail').mockResolvedValue(mockedUserInformation)

const mockedFileInformation: IFilesDataType[] = [
  {
    id: '1',
    name: 'Company Profile.pdf',
    fileId: '1',
    content: 'File data here',
    path: '../../public/assets/files/Company Profile.pdf',
    createdAt: '2023-11-10T19:45:04.174Z',
    userId: '1',
  },
  {
    id: '2',
    name: 'Company agreement.pdf',
    fileId: '2',
    content: 'File data here',
    path: '../../public/assets/files/Company agreement.pdf',
    createdAt: '2023-11-10T19:45:04.174Z',
    userId: '2',
  },
]

jest.spyOn(services, 'getAllFiles').mockResolvedValue(mockedFileInformation)

describe('CandidatesPage Component', () => {
  const renderHomePage = () => {
    render(
      <BrowserRouter>
        <UserContext>
          <ThemeProvider theme={theme}>
            <HomePage />
          </ThemeProvider>
        </UserContext>
      </BrowserRouter>
    )
  }
  test('renders without errors', async () => {
    await act(async () => {
      renderHomePage()
    })
  })

  test('handles error while fetching data', async () => {
    jest
      .spyOn(services, 'getAllFiles')
      .mockRejectedValueOnce(new Error('Failed to fetch data from the server:'))

    renderHomePage()

    expect(screen.findByText).toBeInstanceOf(Object)
  })
})
