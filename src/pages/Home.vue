<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <div class="main-container">
      <main>
        <div id="container">
          <!--MapContainer/-->
          <nButton @click="fetchdata" :style="{ width: 'fit-content' }">看看数据</nButton>
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
import { defineComponent, ref } from 'vue'

let word = ref('')

const fetchdata = () => {
  ApiService.getDisasters().then((response: any) => {
    console.log(response.data)
  })
}
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
  left: 5%;
}
</style>
