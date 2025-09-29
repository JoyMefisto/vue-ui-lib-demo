<script setup lang="ts">
import '@/styles/theme.css'
import '@/styles/base.css'
import './UCard.css'
</script>
<template>
  <div class="ui-card">
    <header class="ui-card__header">
      <slot name="header" />
    </header>
    <div class="ui-card__content">
      <slot />
    </div>
    <footer class="ui-card__footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
