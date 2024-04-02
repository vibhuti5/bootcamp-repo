import { Meta, StoryFn } from '@storybook/react'
import ExportModal from '.'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Organisms/ExportModal',
  component: ExportModal,
  argTypes: {},
} as Meta<typeof ExportModal>

const Template: StoryFn<typeof ExportModal> = (args) => {
  return (
    <BrowserRouter>
      <ExportModal {...args} />
    </BrowserRouter>
  )
}

export const Default = Template.bind({})
Default.args = {
  open: true,
}
