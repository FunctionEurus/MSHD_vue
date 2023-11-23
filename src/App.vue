<template>
  <n-space vertical>
    <header>
      <n-breadcrumb>
        <n-breadcrumb-item href="#/">Home</n-breadcrumb-item>
        <n-breadcrumb-item href="#/login&register">Login&Register</n-breadcrumb-item>
        <n-breadcrumb-item href="#/input">Input</n-breadcrumb-item>
        <n-breadcrumb-item href="#/non-existent-path">UploadFiles</n-breadcrumb-item>
        <n-breadcrumb-item href="#/map">Map</n-breadcrumb-item>
        <n-breadcrumb-item href="#/non-existent-path">404</n-breadcrumb-item>
      </n-breadcrumb>
    </header>

    <n-space justify="center">
      <aside>
        <Menu />
      </aside>
      <main>
        <component :is="currentView" />
      </main>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import Login_Register from './pages/Login&Register.vue'
import Input from './pages/Input.vue'
import Map from '@/pages/Map.vue'
import NotFound from './pages/NotFound.vue'
import Menu from '@/components/Menu.vue'

const routes: any = {
  '/': Home,
  '/login&register': Login_Register,
  '/input': Input,
  '/map': Map
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<style scoped></style>
