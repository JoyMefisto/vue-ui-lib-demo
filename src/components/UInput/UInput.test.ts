import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UInput from './UInput.vue'

describe('UInput.vue', () => {
  it('renders input element', () => {
    const wrapper = mount(UInput)
    const input = wrapper.find('input')

    expect(input.exists()).toBe(true)
  })

  it('accepts placeholder prop', () => {
    const wrapper = mount(UInput, {
      attrs: { placeholder: 'Enter text here' },
    })
    const input = wrapper.find('input')

    expect(input.attributes('placeholder')).toBe('Enter text here')
  })

  it('renders with value', async () => {
    const wrapper = mount(UInput, {
      props: { modelValue: 'Hello' },
    })
    const input = wrapper.find('input')

    expect((input.element as HTMLInputElement).value).toBe('Hello')
  })

  it('emits input event when typing', async () => {
    const wrapper = mount(UInput)
    const input = wrapper.find('input')

    await input.setValue('test input')

    expect(wrapper.emitted()).toHaveProperty('input')
    expect((wrapper.emitted('update:modelValue')![0] as never)[0]).toBe('test input')
  })

  it('respects disabled attribute', () => {
    const wrapper = mount(UInput, {
      attrs: { disabled: true },
    })
    const input = wrapper.find('input')

    expect(input.attributes('disabled')).toBeDefined()
  })

  it('applies correct classes', () => {
    const wrapper = mount(UInput)
    const input = wrapper.find('input')

    expect(input.classes()).toContain('ui-input')
  })
})
