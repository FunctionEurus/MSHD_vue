<template>
  <n-upload abstract :default-file-list="fileList" action="http://localhost:4000/upload">
    <n-card style="width: 200%" title="文件列表">
      <n-upload-file-list />
    </n-card>
    <n-button-group style="margin-top: 10%;">
      <n-upload-trigger #="{ handleClick }" abstract>
        <n-button @click="handleClick"> 上传 </n-button>
      </n-upload-trigger>
    </n-button-group>
  </n-upload>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { UploadFileInfo } from 'naive-ui'
export default defineComponent({
  setup() {
    const fileListRef = ref<UploadFileInfo[]>([])
    return { fileList: fileListRef }
  }
})
</script>
