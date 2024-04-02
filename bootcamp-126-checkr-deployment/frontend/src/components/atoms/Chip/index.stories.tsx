import Chip from '.'
import { Meta, StoryFn } from '@storybook/react'
import Theme from '../../../theme'

export default {
  title: 'Atoms/Chip',
  component: Chip,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Chip>

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args} />

export const ClearChip = Template.bind({})
ClearChip.args = {
  label: 'CLEAR',
  variant: 'filled',
  style: {
    backgroundColor: Theme.palette.accentColors.lightGreen,
    color: Theme.palette.accentColors.green,
    borderRadius: '4px',
  },
}
