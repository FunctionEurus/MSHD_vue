<template>
  <header>
    <n-breadcrumb>
        <n-breadcrumb-item href="#/">Home</n-breadcrumb-item>
        <n-breadcrumb-item href="#/about">About</n-breadcrumb-item>
        <n-breadcrumb-item href="#/non-existent-path">404</n-breadcrumb-item>
      </n-breadcrumb>
      <component :is="currentView" />
  </header>
</template>

<script setup lang="ts">
import ApiService from '@/services/api'
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'
const routes = {
  '/': Home,
  '/about': About
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

let word = ref('')

ApiService.getDisasters().then((response) => {
  response.data
    .forEach((item) => {
      console.log(item.id, item.code, item.time, item.source)
      word.value = item.code
    })
    .catch((error) => {
      console.error('Error fetching disasters:', error)
    })
  ApiService.getDisasterById('4')
    .then((response) => {
      console.log(response.data.location)
      console.log(response.data.carrier)
      console.log(response.data.time)
      console.log(response.data.code)
    })
    .catch((error) => {
      console.error(`Error fetching 3disaster:`, error)
    })
})
</script>

<style scoped></style>
