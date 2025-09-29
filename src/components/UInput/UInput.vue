<script setup lang="ts">
import '@/styles/theme.css'
import '@/styles/base.css'
import './UInput.css'
import { computed } from 'vue'

export interface UInputProps {
  modelValue?: string
  type?: string
  placeholder?: string
  disabled?: boolean
}

export interface UInputEmits {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<UInputProps>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  disabled: false,
})

const emit = defineEmits<UInputEmits>()

const value = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
})
</script>

<template>
  <input
    class="ui-input"
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>
