import './styles/index.css'

import UButton from '@/components/UButton/UButton.vue'
import UInput from '@/components/UInput/UInput.vue'
import UCard from '@/components/UCard/UCard.vue'

export { UButton, UInput, UCard }

export type { UButtonSize, UButtonVariant, UButtonProps } from '@/components/UButton/UButton.vue'
export type { UInputProps, UInputEmits } from '@/components/UInput/UInput.vue'

import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('UButton', UButton)
    app.component('UInput', UInput)
    app.component('UCard', UCard)
  },
}
