<template>
    <n-input-number v-model:value="value" clearable />
    <n-button @click="del">删除</n-button>
  <n-card
    title="删除结果:"
    style="margin-top: 5%"
    v-if="result != ''"
    :segmented="{
      content: true,
      footer: 'soft'
    }"
  >
    <template #footer>
      {{ result }}
    </template>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ApiService from '@/services/api'

export default defineComponent({
  methods: {
    del() {
      ApiService.getDisasterById(this.value.toString()).then((response) => {
        if (response.data != '') {
          ApiService.deleteDisaster(this.value.toString())
          this.result = `已删除id为${this.value}的记录。`
        } else {
          this.result = `删除失败，未找到id为${this.value}的记录。`
        }
      })
    }
  },
  setup() {
    return {
      value: ref(0),
      result: ref('')
    }
  }
})
</script>
