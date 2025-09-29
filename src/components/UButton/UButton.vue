<template>
  <button
    :class="[baseClass, sizeClass, variantClass]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import '@/styles/theme.css'
import '@/styles/base.css'
import './UButton.css'

import { computed } from 'vue'

export type UButtonSize = 'sm' | 'md' | 'lg'
export type UButtonVariant = 'primary' | 'secondary' | 'warning' | 'danger'

export interface UButtonProps {
  variant?: 'primary' | 'secondary' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<UButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()

const baseClass = 'u-btn'
const sizeClass = computed(() => `u-btn--${props.size}`)
const variantClass = computed(() => `u-btn--${props.variant}`)
</script>
