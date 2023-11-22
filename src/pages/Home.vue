<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <div id="app">
    <div class="main-container">
      <aside>
        <n-space vertical>
          <Menu />
        </n-space>
      </aside>
      <main>
        <div id="container">
          <!--MapContainer/-->
          <nButton :style="{ width: 'fit-content' }">编码为{{ word }}</nButton>
          <DataTable />
        </div>
      </main>
    </div>
    <div class="footer-container">
      
      <n-back-top :right="100" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import MapContainer from '@/components/MapContainer.vue'
import Menu from '@/components/Menu.vue'
import ApiService from '@/services/api'
import DataTable from '@/components/DataTable.vue'
import { ref } from 'vue'

let word = ref('')

ApiService.getDisasters().then((response: any) => {
  response.data
    .forEach((item: any) => {
      console.log(item.id, item.code, item.time, item.source)
      word.value = item.code
    })
    .catch((error: any) => {
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

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  display: flex;
  flex: 1; /* 使 main 区域占据剩余空间 */
}

.footer-container {
  margin-top: auto;
}

#container {
  position: relative;
  width: 200%; /* 保持宽度占据整个 main 区域 */
  height: 800px;
  left: 5%
}
</style>
