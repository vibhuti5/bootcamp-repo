import { render, screen } from '@testing-library/react'
import LandingTemplate from '.'
import { TABLE_DATA } from '../../../utils/constants'
import { getCandidateInfoColumns } from '../../../utils/helper/index.d'
import CandidatePageHeader from '../../organisms/CandidatePageHeader'
import DataTable from '../../organisms/DataTable'
import { BrowserRouter } from 'react-router-dom'

describe('LandingTemplate', () => {
  test('should render Template without errors', () => {
    render(
      <BrowserRouter>
        <LandingTemplate
          header={
            <CandidatePageHeader onExport={() => {}}></CandidatePageHeader>
          }
          main={
            <DataTable
              columns={getCandidateInfoColumns(() =>
                console.log('cancel button clicked')
              )}
              rowsData={TABLE_DATA}
              showPagination={true}
            />
          }
        />
      </BrowserRouter>
    )
    expect(screen.getByTestId('gridItems')).toBeInTheDocument
  })
})
