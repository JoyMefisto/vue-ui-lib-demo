import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UButton from './UButton.vue'

describe('UButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(UButton, {
      slots: { default: 'Click me' },
    })

    expect(wrapper.text()).toBe('Click me')
  })

  it('applies primary variant by default', () => {
    const wrapper = mount(UButton)

    expect(wrapper.classes()).toContain('u-btn--primary')
  })

  it('applies correct variant class', () => {
    const wrapper = mount(UButton, {
      props: { variant: 'danger' },
    })

    expect(wrapper.classes()).toContain('u-btn--danger')
  })

  it('applies correct size class', () => {
    const wrapper = mount(UButton, {
      props: { size: 'lg' },
    })

    expect(wrapper.classes()).toContain('u-btn--lg')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(UButton, {
      slots: { default: 'Click' },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted('click')?.[0]).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(UButton, {
      props: { disabled: true },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('has disabled attribute when disabled', () => {
    const wrapper = mount(UButton, {
      props: { disabled: true },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('matches snapshot', () => {
    const wrapper = mount(UButton, {
      slots: { default: 'Snapshot' },
      props: { variant: 'secondary', size: 'sm' },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
