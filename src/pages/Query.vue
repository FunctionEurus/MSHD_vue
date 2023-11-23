<template>
  <n-button @click="findall">查询全部</n-button>
  <p v-for="item in all">{{ item }}</p>
  <n-space justify="center">
    <n-input-number v-model:value="id" clearable />
    <n-button @click="findone">查询</n-button>
  </n-space>
  <p>{{ one }}</p>
</template>

<script lang="ts">
import ApiService from '@/services/api'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  methods: {
    findall() {
      ApiService.getDisasters().then((response) => {
        this.all = response.data
      })
    },
    findone() {
      ApiService.getDisasterById(this.id.toString()).then((response) => {
        this.one = response.data
      })
    }
  },
  setup() {
    return {
      all: ref(''),
      id: ref(0),
      one: ref('')
    }
  }
})
</script>
