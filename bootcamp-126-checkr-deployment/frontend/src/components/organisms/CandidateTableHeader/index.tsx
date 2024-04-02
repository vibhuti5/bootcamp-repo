import { Stack, styled } from '@mui/material'
import React, { useState } from 'react'
import Theme from '../../../theme'
import CustomTypography from '../../atoms/Typography'
import InputField from '../../atoms/InputField'
import Icon from '../../atoms/Icon'
import Search from '../../../../public/assets/images/search.svg'
import { SearchCandidate } from './utils'
import More from '../../../../public/assets/images/more.svg'
import Filter from '../../../../public/assets/images/Filter.svg'
import {
  CandidatePageTableHeaderTitle,
  FilterName,
  SearchCandidatePlaceholder,
} from '../../../utils/constants'

const StyledStack = styled(Stack)`
  height: 6vh;
  flex-grow: 1;
  background-color: ${Theme.palette.structuralColors.white};
  padding: 1vw;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`
const FilterStack = styled(Stack)`
  border: 1px solid ${Theme.palette.structuralColors.stroke};
  padding: 0.5vh 1vw;
  height: 4vh;
  border-radius: ${Theme.spacing(2)};
`
interface CandidateTableHeaderProps {
  handleFilter?: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  showOption?: boolean
}

const CandidateTableHeader = (props: CandidateTableHeaderProps) => {
  const [searchValue, setSearchValue] = useState(props.searchQuery)
  return (
    <StyledStack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <CustomTypography
        variant="subtitle1"
        color={Theme.palette.text.highEmphasis}
      >
        {CandidatePageTableHeaderTitle}
      </CustomTypography>
      <Stack gap={'1vw'} direction={'row'}>
        <InputField
          value={searchValue}
          placeholder={SearchCandidatePlaceholder}
          startAdornment={<Icon src={Search} alt="search" />}
          onChange={(e) =>
            SearchCandidate(
              e,
              searchValue,
              setSearchValue,
              props.setSearchQuery
            )
          }
        />
        <FilterStack
          alignItems={'center'}
          direction={'row'}
          gap={'8px'}
          onClick={props.handleFilter}
        >
          <Icon src={Filter} alt="filter" />
          <CustomTypography
            variant="body1"
            color={Theme.palette.text.mediumEmphasis}
          >
            {FilterName}
          </CustomTypography>
        </FilterStack>
        {props.showOption && (
          <FilterStack alignItems={'center'} justifyContent={'space-around'}>
            <Icon src={More} alt="more" />
          </FilterStack>
        )}
      </Stack>
    </StyledStack>
  )
}

export default CandidateTableHeader
