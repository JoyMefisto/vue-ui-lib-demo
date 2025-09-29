import type { Meta, StoryObj } from '@storybook/vue3'
import UButton from './UButton.vue'

const meta: Meta<typeof UButton> = {
  title: 'UI/UButton',
  component: UButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type Story = StoryObj<typeof UButton>

// 1. Basic usage
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    default: 'Primary Button',
  },
}

// 2. All variants
export const Variants: Story = {
  render: () => ({
    components: { UButton },
    template: `
      <div>
        <UButton variant="primary">Primary</UButton>
        <UButton variant="secondary">Secondary</UButton>
        <UButton variant="warning">Warning</UButton>
        <UButton variant="danger">Danger</UButton>
      </div>
    `,
  }),
}

// 3. All sizes
export const Sizes: Story = {
  render: () => ({
    components: { UButton },
    template: `
      <div>
        <UButton size="sm">Small</UButton>
        <UButton size="md">Medium</UButton>
        <UButton size="lg">Large</UButton>
      </div>
    `,
  }),
}

// 4. Disabled state
export const Disabled: Story = {
  render: () => ({
    components: { UButton },
    template: `<UButton disabled>Disabled Button</UButton>`,
  }),
}

// 5. Click handler
export const WithClick: Story = {
  args: {
    default: 'Click Me',
  },
}
