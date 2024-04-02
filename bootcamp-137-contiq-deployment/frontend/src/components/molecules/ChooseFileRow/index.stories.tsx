import { type Meta, type StoryObj } from '@storybook/react'
import ChooseFileRow from '.'
import theme from '../../../theme'

const meta: Meta<typeof ChooseFileRow> = {
  title: 'Molecules/ChooseFileRow',
  component: ChooseFileRow,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'Gray',
      values: [
        {
          name: 'Gray',
          value: theme.palette.grays.gray400,
        },
      ],
    },
  },
}

type Story = StoryObj<typeof ChooseFileRow>

export const ChooseFileRowElement: Story = {
  args: {
    label: 'File 1',
    isChecked: false,
  },
}
export default meta
