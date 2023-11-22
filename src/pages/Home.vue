<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header>
      <GameController />
      <Menu />
    </header>
    <main>
      <div id="container">
        <MapContainer />
      </div>
    </main>
    <div>
      <nButton :style="{ width: 'fit-content' }">编码为{{}}</nButton>
    </div>
    
    <n-back-top :right="100" />
  </template>
  
  <script setup lang="ts">
  import MapContainer from '@/components/MapContainer.vue'
  import GameController from '@/components/GameControllerIcon.vue'
  import Menu from '@/components/Menu.vue'
  
  </script>
  
  <style scoped>
</style>
  