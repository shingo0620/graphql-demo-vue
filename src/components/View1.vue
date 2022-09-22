<template>
  <div>
    this is View1.vue
    <p>Loading: {{ loading }}</p>
    <p>Result: {{ result }}</p>
  </div>
</template>

<script lang="ts" setup>
import { queryView1 } from '../api'

const { result, loading } = queryView1()

</script>
