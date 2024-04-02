import { Meta, StoryFn } from '@storybook/react'
import DataTable from '.'
import React from 'react'
import { getCandidateInfoColumns } from '../../../utils/helper/index.d'
import { action } from '@storybook/addon-actions'
import { TABLE_DATA } from '../../../utils/constants'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Organisms/DataTable',
  component: DataTable,
  argTypes: {},
} as Meta<typeof DataTable>

const Template: StoryFn<typeof DataTable> = (args) => (
  <BrowserRouter>
    <DataTable {...args} />
  </BrowserRouter>
)

export const Default = Template.bind({})
Default.args = {
  columns: getCandidateInfoColumns(() => action('cancel button clicked')),
  rowsData: TABLE_DATA,
  showPagination: true,
}
