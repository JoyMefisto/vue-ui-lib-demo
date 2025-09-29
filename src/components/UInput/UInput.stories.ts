import type { Meta, StoryObj } from '@storybook/vue3'
import UInput from './UInput.vue'

const meta: Meta<typeof UInput> = {
  title: 'UI/UInput',
  component: UInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof UInput>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithValue: Story = {
  args: {
    modelValue: 'Hello World',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
}
