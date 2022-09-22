<script setup lang="ts">
  import { computed, ref } from 'vue'

  import View1 from './components/View1.vue'
  import View2 from './components/View2.vue'

  const viewString = ref()
  const appView = computed(() => {
    if (viewString.value === '2') {
      return View2
    }
    return View1
  })
</script>

<template>
  <ul>
    <li><a href="#" @click="viewString='1'">View 1</a></li>
    <li><a href="#" @click="viewString='2'">View 2</a></li>
  </ul>
  <component :is="appView"></component>
</template>

