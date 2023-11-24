<template>
  <n-space vertical style="width: auto;">
    <n-button @click="findall">查询全部</n-button>
    <p v-for="item in all">{{ item }}</p>
    <n-space justify="center" style="margin-top: 5%">
      <n-input-number v-model:value="id" clearable />
      <n-button @click="findone">查询</n-button>
    </n-space>
    <n-card
      class="card"
      title="查询结果:"
      :segmented="{
        content: true,
        footer: 'soft'
      }"
      v-if="dbid != ''"
    >
      <template #footer>
        记录编号: {{ dbid }}<br />
        地理信息: {{ location }} <br />
        发生时间: {{ time }}<br />
        来源: {{ source }} <br />
        载体:{{ carrier }}<br />
        灾情: {{ disaster }}<br />
        编码: {{ code }}
      </template>
    </n-card>
    <n-card
      class="card"
      title="查询结果:"
      :segmented="{
        content: true,
        footer: 'soft'
      }"
      v-if="dbid === '' && one != ''"
    >
      <template #footer>{{ one }}</template>
    </n-card>
  </n-space>
</template>

<script lang="ts">
import ApiService from '@/services/api'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  methods: {
    findall() {
      ApiService.getDisasters().then((response) => {
        this.all = response.data
        if (response.data === '') {
          this.all = '未查询到数据。'
        }
      })
    },
    findone() {
      ApiService.getDisasterById(this.id.toString()).then((response) => {
        if (response.data === '') {
          this.one = `未查询到id为${this.id}的数据。`
          this.dbid = ''
          this.location = ''
          this.time = ''
          this.source = ''
          this.carrier = ''
          this.disaster = ''
          this.code = ''
        } else {
          this.one = '查询成功。'
          this.dbid = response.data.id
          this.location = response.data.location
          this.time = response.data.time
          this.source = response.data.source
          this.carrier = response.data.carrier
          this.disaster = response.data.disaster
          this.code = response.data.code
        }
      })
    }
  },
  setup() {
    return {
      all: ref(''),
      one: ref(''),
      id: ref(0),
      dbid: ref(''),
      location: ref(''),
      time: ref(''),
      source: ref(''),
      carrier: ref(''),
      disaster: ref(''),
      code: ref('')
    }
  }
})
</script>

<style scoped>
.card {
  width: auto;
  margin-top: 5%;
}
</style>
