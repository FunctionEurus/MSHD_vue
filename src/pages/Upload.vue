<template>
  <n-space vertical>
    <n-upload abstract :default-file-list="fileList" action="http://localhost:4000/upload">
      <n-button-group>
        <n-upload-trigger #="{ handleClick }" abstract>
          <n-button @click="handleClick"> 上传 </n-button>
        </n-upload-trigger>
      </n-button-group>
      <n-card title="文件列表" style="width: 350px;margin-top: 5%;">
        <n-upload-file-list />
      </n-card>
    </n-upload>
  </n-space>
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
