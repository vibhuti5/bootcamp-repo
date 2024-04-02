import { Meta, Story } from '@storybook/react'
import { GifText } from '../../../utils/constants'
import CompletedModal from '.'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Molecules/CompletedModal',
  component: CompletedModal,
  argTypes: {},
} as Meta<typeof CompletedModal>

const Template: Story<typeof CompletedModal> = (args) => (
  <BrowserRouter>
    <CompletedModal {...args} />
  </BrowserRouter>
)

export const Default = Template.bind({})
Default.args = {
  modalText: GifText,
  open: true,
}
