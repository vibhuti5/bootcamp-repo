import React from 'react'
import HomeTemplate from '.'
import { fireEvent, render, screen } from '@testing-library/react'
import { Box } from '@mui/material'
import theme from '../../../theme'
import { BrowserRouter } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'

describe('HomeTemplate', () => {
  test('should render Template without errors', () => {
    render(
      <BrowserRouter>
        <UserContext>
          <HomeTemplate
            main={
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: theme.palette.primary.light,
                }}
              ></Box>
            }
          />
        </UserContext>
      </BrowserRouter>
    )
    expect(screen.getByTestId('gridItems')).toBeInTheDocument()
    const button = screen.getByText('Home')
    fireEvent.click(button)
  })
})
