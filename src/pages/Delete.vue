<template>
  <n-space justify="center">
    <n-input-number v-model:value="value" clearable />
    <n-button @click="del">删除</n-button>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ApiService from '@/services/api'

export default defineComponent({
    methods: {
        del() {
            ApiService.deleteDisaster(this.value.toString())
        }
    },
  setup() {
    return {
      value: ref(0)
    }
  }
})
</script>
