import type { Meta, StoryObj } from '@storybook/vue3'
import UCard from './UCard.vue'

const meta: Meta<typeof UCard> = {
  title: 'UI/Card',
  component: UCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof UCard>

// 1. Basic card with only content
export const Basic: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <UCard>
        This is a simple card with only content.
      </UCard>
    `,
  }),
}

// 2. Card with header + content
export const WithHeader: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <UCard>
        <template #header>Card Header</template>
        Some content inside the card.
      </UCard>
    `,
  }),
}

// 3. Card with header + footer
export const WithHeaderAndFooter: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <UCard>
        <template #header>Title</template>
        Card body content goes here.
        <template #footer>Footer info</template>
      </UCard>
    `,
  }),
}

// 4. Long content card
export const LongContent: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <UCard>
        <template #header>Article</template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Aliquam ut feugiat lorem. Suspendisse potenti.</p>
        <template #footer>Read more...</template>
      </UCard>
    `,
  }),
}

// 5. Nested content
export const Nested: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <UCard>
        <template #header>Dashboard Widget</template>
        <UCard>
          <template #header>Nested Card</template>
          Nested content here.
        </UCard>
        <template #footer>Updated 1h ago</template>
      </UCard>
    `,
  }),
}
