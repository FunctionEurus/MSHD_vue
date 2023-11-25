<template>
  <n-space vertical>
    <n-radio-group v-model:value="value" name="radiobuttongroup1">
      <n-radio-button
        v-for="song in songs"
        :key="song.value"
        :value="song.value"
        :disabled="
          (song.label === 'Live Forever' && disabled1) ||
          (song.label === 'Shakermaker' && disabled2)
        "
        :label="song.label"
      />
    </n-radio-group>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      value: ref(null),
      disabled2: ref(false),
      disabled1: ref(false),
      songs: [
        {
          value: "Rock'n'Roll Star",
          label: "Rock'n'Roll Star"
        },
        {
          value: 'Shakermaker',
          label: 'Shakermaker'
        },
        {
          value: 'Live Forever',
          label: 'Live Forever'
        },
        {
          value: 'Up in the Sky',
          label: 'Up in the Sky'
        },
        {
          value: '...',
          label: '...'
        }
      ].map((s) => {
        s.value = s.value.toLowerCase()
        return s
      })
    }
  }
})
</script>
