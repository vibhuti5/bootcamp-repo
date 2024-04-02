import React from 'react'
import { render } from '@testing-library/react'
import InfoTab from '.'
import '@testing-library/dom'

describe('InfoTab component', () => {
  it('should render with title and value', () => {
    const title = 'Your Title'
    const value = 'Your Value'

    const { getByText, getByAltText } = render(
      <InfoTab title={title} value={value} icon={''} />
    )

    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(value)).toBeInTheDocument()
    expect(getByAltText('name')).toBeInTheDocument()
  })
})
