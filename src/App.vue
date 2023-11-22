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
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'
const routes: any = {
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
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
