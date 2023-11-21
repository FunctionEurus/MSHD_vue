<template>
  <header></header>

  <main>
    <!--TheWelcome /-->
    <div id="container">
      <!--MapContainer/-->
    </div>
    <!--VueSidebarMenuAkahon/-->
    <div>
      <VueTable :headers="header" :data="data" :keys="keys" dark />
    </div>
  </main>
</template>

<script setup lang="ts">
import ApiService from '@/services/api'
import MapContainer from '@/components/MapContainer.vue'
import VueSidebarMenuAkahon from '@/components/Sidebar-menu-akahon.vue'
import { VueTable } from '@harv46/vue-table'
import '@harv46/vue-table/dist/style.css'

const header = ['编号', '编码', '时间', '来源']
const keys = ['id', 'code', 'time', 'source']

let data: any = []

ApiService.getDisasters()
  .then((response) => {
    response.data.forEach((item: any) => {
      // console.log(item.id, item.code, item.time, item.source);
      data.push({
        id: item.id,
        code: item.code,
        time: item.time,
        source: item.source
      })
    })
    console.log(data)
  })
  .catch((error) => {
    console.error('Error fetching disasters:', error)
  })
ApiService.getDisasterById('4')
  .then((response) => {
    /*
    console.log(response.data.location)
    console.log(response.data.carrier)
    console.log(response.data.time)
    console.log(response.data.code)
    */
  })
  .catch((error) => {
    console.error(`Error fetching 3disaster:`, error)
  })
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
