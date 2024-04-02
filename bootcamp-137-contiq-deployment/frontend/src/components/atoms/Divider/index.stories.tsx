import { type Meta, type StoryObj } from '@storybook/react'
import Divider from '.'
const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof Divider>

export const ORDivider: Story = {
  args: {
    text: 'OR',
  },
}
export const NoTextDivider: Story = {
  args: {},
}

export default meta
