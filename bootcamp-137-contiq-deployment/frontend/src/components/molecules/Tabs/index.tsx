import { Box, Divider, Tab, Tabs, styled, type TabsProps } from '@mui/material'
import React from 'react'
import theme from '../../../theme'

interface TabContent {
  label: string
  content: React.ReactNode
}
export interface CustomTabsProps extends TabsProps {
  tabs: TabContent[]
  value: number
  handleChange?: (event: React.SyntheticEvent, newValue: number) => void
}

const CustomTab = styled(Tab)({
  textTransform: 'none',
  color: theme.palette.text.mediumEmphasis,
  '&.Mui-selected': {
    color: '#8B3DFF',
  },
  '& .MuiTabIndicator-root': {
    backgroundColor: theme.palette.primary.dark,
  },
})

const DividerConfig = {
  sx: {
    color: theme.palette.grays.gray200,
    width: '100%',
  },
}

const TabsComponent = ({
  value,
  tabs,
  handleChange,
  ...props
}: CustomTabsProps): React.JSX.Element => {
  return (
    <Box width="100%">
      <Tabs value={value} onChange={handleChange} data-testid="tabs" {...props}>
        {tabs?.map((item) => (
          <CustomTab label={item.label} key={item.label} />
        ))}
      </Tabs>
      <Divider {...DividerConfig} />
      {tabs[value]?.content}
    </Box>
  )
}

export default TabsComponent
