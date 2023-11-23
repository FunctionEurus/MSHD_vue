<template>
  <n-space justify="space-around" size="large">
    <n-form-item
      ignore-path-change
      :show-label="false"
      :rule="dynamicInputRule"
    >
      <n-dynamic-input v-model:value="value" placeholder="请输入编码"/></n-form-item>
    <n-button @click="submit">提交</n-button>
  </n-space>
  <pre>{{ JSON.stringify(value, null, 1) }}</pre>
  <p>{{ decode }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue'
import ApiService from '@/services/api'

export default defineComponent({
    methods: {
        submit() {
          console.log(this.value[0])
          ApiService.createDisaster(this.value[0]).then(response => {
            this.decode = response.data
          })
        }
    },
    setup() {
    return {
      dynamicInputRule: {
        trigger: 'input',
        validator(rule: unknown, value: string) {
          const numericRegex = /^[0-9]+$/;
          if (numericRegex.test(value)) {
            return new Error('请输入数字')
          }
          return true
        }
      },
      value: ref(''),
      decode: ref('')
    }
  }
})
</script>
