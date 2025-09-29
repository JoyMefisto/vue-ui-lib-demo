import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UCard from './UCard.vue'

describe('UCard', () => {
  it('renders default slot content', () => {
    const wrapper = mount(UCard, {
      slots: {
        default: 'Main content',
      },
    })

    expect(wrapper.find('.ui-card__content').text()).toContain('Main content')
  })

  it('renders header slot when provided', () => {
    const wrapper = mount(UCard, {
      slots: {
        header: 'Card Header',
      },
    })

    expect(wrapper.find('.ui-card__header').text()).toBe('Card Header')
  })

  it('renders footer slot when provided', () => {
    const wrapper = mount(UCard, {
      slots: {
        footer: 'Footer text',
      },
    })

    expect(wrapper.find('.ui-card__footer').text()).toBe('Footer text')
  })

  it('renders all slots together', () => {
    const wrapper = mount(UCard, {
      slots: {
        header: 'Header',
        default: 'Body content',
        footer: 'Footer',
      },
    })

    expect(wrapper.find('.ui-card__header').text()).toBe('Header')
    expect(wrapper.find('.ui-card__content').text()).toBe('Body content')
    expect(wrapper.find('.ui-card__footer').text()).toBe('Footer')
  })

  it('renders empty header/footer when not provided', () => {
    const wrapper = mount(UCard, {
      slots: {
        default: 'Only content',
      },
    })

    expect(wrapper.find('.ui-card__header').text()).toBe('')
    expect(wrapper.find('.ui-card__footer').text()).toBe('')
  })

  it('matches snapshot', () => {
    const wrapper = mount(UCard, {
      slots: {
        header: 'Header',
        default: 'Content',
        footer: 'Footer',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
