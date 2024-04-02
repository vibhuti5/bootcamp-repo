import React from 'react'
import BasicTemplate from '.'
import { render, screen } from '@testing-library/react'
import OtpForm from '../../organisms/OtpForm'

describe('testing the template file', () => {
  test('testing the left and right sides', () => {
    render(<BasicTemplate rightChildren={<OtpForm />} />)
    const rightchild = screen.getByTestId('rightpannel')

    expect(rightchild).toBeInTheDocument
  })
})
