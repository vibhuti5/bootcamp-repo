import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import CustomAvatar from '.'

describe('avatarTest', () => {
  test('avatar renders correctly', () => {
    render(<CustomAvatar src="../assets/images/user.svg" alt="ChekerAvatar" />)
    const avatarTest = screen.getByRole('img')
    expect(avatarTest).toBeInTheDocument()
    const avatarTest1 = screen.getByAltText('ChekerAvatar')
    expect(avatarTest1).toBeInTheDocument()
  })
})
