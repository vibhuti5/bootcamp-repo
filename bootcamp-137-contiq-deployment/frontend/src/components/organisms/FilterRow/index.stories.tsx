import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import React from 'react'
import FilterRow from '.'

export default {
  title: 'Organisms/FilterRow',
  component: FilterRow,
  argTypes: {},
} as Meta<typeof FilterRow>

const Template: StoryFn<typeof FilterRow> = (args) => <FilterRow {...args} />

export const Default = Template.bind({})
Default.args = {
  onAddFileClick: action('Add File Click'),
  onFilterChange: action('filter Change'),
}
