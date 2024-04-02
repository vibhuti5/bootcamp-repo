import React, { useEffect, useState } from 'react'
import { FilterField } from '../../../utils/types'
import { FormControlLabel } from '@mui/material'
import Theme from '../../../theme'
import CustomTypography from '../../atoms/Typography'
import CheckBox from '../../atoms/Checkbox'
import { HandleCheckboxChange } from './utils'
import {
  InnerStyledStack,
  StyledDivider,
  StyledPaper,
  StyledBackDrop,
} from './style'

interface FilterPopupProps {
  filterFields: FilterField[]
  open: boolean
  onStatusChange: (status: string, active: boolean) => void
  setOpen: (value: React.SetStateAction<boolean>) => void
}

const FilterPopup = (props: FilterPopupProps) => {
  const [filterFields, setFilterFields] = useState<FilterField[]>(
    props.filterFields
  )

  useEffect(() => {
    setFilterFields(props.filterFields)
  }, [props.filterFields])
  return (
    <StyledBackDrop
      data-testid="backdrop"
      invisible
      open={props.open}
      onClick={() => {
        props.setOpen(false)
      }}
    >
      <StyledPaper
        elevation={3}
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <InnerStyledStack>
          <CustomTypography
            variant="body1"
            color={Theme.palette.text.highEmphasis}
          >
            Filters
          </CustomTypography>
        </InnerStyledStack>
        <StyledDivider />
        {filterFields.length > 0 &&
          filterFields.map((field) => (
            <InnerStyledStack key={field.name} direction={'column'}>
              <CustomTypography
                variant="body1"
                color={Theme.palette.text.lowEmphasis}
              >
                {field.name}
              </CustomTypography>
              {field.values.map((item) => (
                <FormControlLabel
                  key={item.value}
                  control={
                    <CheckBox
                      checked={item.active}
                      onChange={() => {
                        HandleCheckboxChange(
                          field.name,
                          item.value,
                          filterFields,
                          setFilterFields
                        )
                        props.onStatusChange(item.value, item.active)
                      }}
                      value={item.value}
                      data-testid={item.value}
                    />
                  }
                  label={
                    <CustomTypography
                      variant={'caption2'}
                      color={Theme.palette.text.highEmphasis}
                    >
                      {item.value}
                    </CustomTypography>
                  }
                />
              ))}
            </InnerStyledStack>
          ))}
      </StyledPaper>
    </StyledBackDrop>
  )
}

export default FilterPopup
