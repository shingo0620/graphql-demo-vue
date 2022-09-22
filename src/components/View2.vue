<template>
  <div>
    this is View2.vue
    <p>Loading: {{ loading }}</p>
    <p>Result: {{ result }}</p>
  </div>
</template>

<script lang="ts" setup>
import { queryView2 } from '../api'

const { result, loading } = queryView2()
</script>
