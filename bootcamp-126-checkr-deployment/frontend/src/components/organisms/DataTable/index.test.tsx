import { render, screen, fireEvent } from '@testing-library/react'
import DataTable from '.'
import { TABLE_DATA } from '../../../utils/constants'
import { getCandidateInfoColumns } from '../../../utils/helper/index.d'
import { BrowserRouter } from 'react-router-dom'

describe('DataTable', () => {
  const tableData = TABLE_DATA

  it('should render the component with correct data', () => {
    render(
      <BrowserRouter>
        <DataTable
          columns={getCandidateInfoColumns(() => console.log('click'))}
          rowsData={tableData}
          showPagination={true}
        />
      </BrowserRouter>
    )
  })

  it('should change the items per page correctly', async () => {
    render(
      <BrowserRouter>
        <DataTable
          columns={getCandidateInfoColumns(() => console.log('click'))}
          rowsData={tableData}
          showPagination={true}
        />
      </BrowserRouter>
    )
    const ele = screen.getByTestId('drop-down')
    fireEvent.click(ele)
    const textEle = screen.getByText('10 per page')
    fireEvent.change(textEle)
    expect(tableData).toHaveLength(10)
    const dropdowns = screen.getAllByRole('button')
    fireEvent.click(dropdowns[3])
    fireEvent.mouseDown(dropdowns[0])
    const options = screen.getAllByRole('listitem')
    fireEvent.click(options[2])
    expect(options).toBeTruthy()
  })
  it('should handle row click', () => {
    render(
      <BrowserRouter>
        <DataTable
          columns={getCandidateInfoColumns(() => console.log('click'))}
          rowsData={tableData}
          showPagination={true}
        />
      </BrowserRouter>
    )
    const rows = screen.getAllByRole('row')
    fireEvent.click(rows[1])
  })
})
