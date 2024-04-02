import {
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  styled,
} from '@mui/material'
import './styles.css'
import CustomTypography from '../../atoms/Typography'
import Icon from '../../atoms/Icon'
import { PAGINATION } from '../../../utils/constants'
import ReactPaginate from 'react-paginate'
import LeftArrowIcon from '../../../../public/assets/images/arrow-left.svg'
import RightArrowIcon from '../../../../public/assets/images/arrow-right.svg'
import { useState } from 'react'
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridSortModel,
  GridValidRowModel,
} from '@mui/x-data-grid'
import Theme from '../../../theme'

export const StyledArrowPointer = {
  height: '24px',
  width: '24px',
}

const StyledDataGrid = styled(DataGrid)({
  width: '100%',
  border: 0,
  '&.Mui-selected': {
    backgroundColor: Theme.palette.primary[300],
    '&:hover': {
      backgroundColor: Theme.palette.primary[300],
    },
  },
  '& .MuiDataGrid-row': {
    backgroundColor: Theme.palette.structuralColors.white,
    borderBottom: `1px solid ${Theme.palette.structuralColors.stroke}`,
  },
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: Theme.palette.primary[100],
    color: Theme.palette.text.mediumEmphasis,
    borderBottom: 'none',
    padding: '16px',
    font: Theme.typography.caption2['@media (max-width:1920px)'],
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-cell': {
    padding: '16px',
  },
})
interface DataTableProps {
  readonly columns: readonly GridColDef[]
  readonly rowsData: readonly GridValidRowModel[]
  readonly showPagination?: boolean
  sortModel?: GridSortModel
  onSortModelChange?: (
    model: GridSortModel,
    details: GridCallbackDetails<any>
  ) => void
}

export default function DataTable(props: DataTableProps) {
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = props.rowsData.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(props.rowsData.length / itemsPerPage)

  const onChangeDataPerPage = (e: any) => {
    setItemsPerPage(e.target.value)
  }

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % props.rowsData.length
    setItemOffset(newOffset)
  }

  return (
    <Paper className="styled-layout-container">
      <StyledDataGrid
        rows={currentItems}
        columns={props.columns as GridColDef<GridValidRowModel>[]}
        hideFooter={true}
        disableColumnMenu
        disableRowSelectionOnClick
        autoHeight
        sortModel={props.sortModel}
        onSortModelChange={props.onSortModelChange}
      />
      {props.showPagination && (
        <Box className="pagination-style-container">
          <Box className="info-container">
            <CustomTypography
              variant="caption2"
              color={Theme.palette.text.mediumEmphasis}
            >
              <CustomTypography
                variant="caption2"
                color={Theme.palette.text.highEmphasis}
              >
                {`${itemsPerPage} `}
              </CustomTypography>
              {PAGINATION.pagesOutOf} {props.rowsData.length}{' '}
              {PAGINATION.result}
            </CustomTypography>
            <FormControl size="small">
              <Select
                className="select-items"
                value={itemsPerPage}
                onChange={onChangeDataPerPage}
                displayEmpty
                inputProps={{ Roboto: 'Without label' }}
                data-testid="drop-down"
              >
                {PAGINATION.perPageItems.map((page) => {
                  return (
                    <MenuItem
                      data-testid="item"
                      value={page.value}
                      key={page.id}
                    >
                      <CustomTypography
                        className="menu-items-text"
                        variant="caption2"
                      >
                        {page.page}
                      </CustomTypography>
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Box>
          <ReactPaginate
            breakLabel={PAGINATION.pageBreakingLable}
            nextLabel={
              <Icon
                src={RightArrowIcon}
                alt={PAGINATION.arrowRightAltText}
                style={StyledArrowPointer}
              />
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={0}
            pageCount={pageCount}
            previousLabel={
              <Icon
                src={LeftArrowIcon}
                alt={PAGINATION.arrowLeftAltText}
                style={StyledArrowPointer}
              />
            }
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousClassName="page-num"
            nextClassName="page-num"
            activeLinkClassName="active"
          />
        </Box>
      )}
    </Paper>
  )
}
