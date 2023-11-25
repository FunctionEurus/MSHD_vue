<template>
  <n-space style="display: flex;">
    <div>
      <h3>请输入要修改的数据id:</h3>
      <n-space style="margin-top: 5%; margin-left: 5%">
        <n-input-number v-model:value="id" clearable />
        <n-button @click="findone">查询</n-button>
      </n-space>
      <h3 v-if="dbid != ''" style="margin-top: 5%">请选择要修改的字段:</h3>
      <n-space vertical>
        <n-radio-group
          v-model:value="choice"
          name="radiobuttongroup1"
          style="margin-top: 5%"
          v-if="dbid != ''"
        >
          <n-radio-button
            v-for="field in fields"
            :key="field.value"
            :value="field.value"
            :label="field.label"
          />
        </n-radio-group>
        <!--<h3 style="margin-top: 5%">你选择了: {{ choice }}</h3>-->
        <n-space style="margin-top: 5%; margin-left: 5%">
          <n-input-number v-model:value="updatevalue" clearable v-if="dbid != ''" />
          <n-button @click="update" v-if="dbid != ''">修改</n-button>
        </n-space>
      </n-space>
      <div style="display: flex">
        <div>
          <n-card
            class="card"
            title="查询结果:"
            :segmented="{
              content: true,
              footer: 'soft'
            }"
            v-if="dbid != ''"
            style="margin-top: 5%"
          >
            <template #footer>
              记录编号: {{ dbid }}<br />
              <span :style="{ color: choice === 'location' ? '#1BA657' : 'black' }"
                >地理信息: {{ location }} <br
              /></span>
              <span :style="{ color: choice === 'time' ? '#1BA657' : 'black' }"
                >发生时间: {{ time }}<br
              /></span>
              <span :style="{ color: choice === 'source' ? '#1BA657' : 'black' }"
                >来源: {{ source }} <br
              /></span>
              <span :style="{ color: choice === 'carrier' ? '#1BA657' : 'black' }"
                >载体:{{ carrier }}<br
              /></span>
              <span :style="{ color: choice === 'disaster' ? '#1BA657' : 'black' }"
                >灾情: {{ disaster }}<br
              /></span>
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
            style="margin-top: 5%"
          >
            <template #footer>{{ one }}</template>
          </n-card>
        </div>
      </div>
    </div>
    <template v-if="choice != ''">
      <n-list hoverable clickable style="margin-top: 5%; margin-left: 5%; width: auto">
        <n-list-item v-if="choice === 'source'" style="width: 120%">
          <n-thing title="业务报送数据" content-style="margin-top: 5%;">
            <template #description>
              <n-space style="margin-top: 4px">
                <n-tag :bordered="false" type="success" size="large"> 大类代码：1 </n-tag>
              </n-space>
            </template>
            前方地震应急指挥部 00<br />
            后方地震应急指挥部 01<br />
            应急指挥技术系统 20<br />
            社会服务工程应急救援系统 21<br />
            危险区预评估工作组 40<br />
            地震应急指挥技术协调组 41<br />
            震后政府信息支持工作项目组 42<br />
            灾情快速上报接收处理系统 80<br />
            地方地震局应急信息服务相关技术系统 81<br />
            其他 99<br />
          </n-thing>
        </n-list-item>
        <n-list-item v-if="choice === 'source'" style="width: 120%">
          <n-thing title="泛在感知数据" content-style="margin-top: 5%;">
            <template #description>
              <n-space style="margin-top: 4px">
                <n-tag :bordered="false" type="success" size="large"> 大类代码：2 </n-tag>
              </n-space>
            </template>
            互联网感知 00<br />
            通信网感知 01<br />
            舆情网感知 02<br />
            电力系统感知 03<br />
            交通系统感知 04<br />
            其他 05<br />
          </n-thing>
        </n-list-item>
        <n-list-item v-if="choice === 'source'" style="width: 120%">
          <n-thing title="其他数据" content-style="margin-top: 5%;">
            <template #description>
              <n-space style="margin-top: 4px">
                <n-tag :bordered="false" type="success" size="large"> 大类代码：3 </n-tag>
              </n-space>
            </template>
            无 00
          </n-thing>
        </n-list-item>
        <n-list-item v-if="choice === 'carrier'" style="width: 120%">
          <n-thing title="载体编码" content-style="margin-top: 5%;">
            <template #description>
              <n-space style="margin-top: 4px">
                <n-tag :bordered="false" type="success" size="large"> 文字：0 </n-tag>
                <n-tag :bordered="false" type="success" size="large"> 图像：1</n-tag>
                <n-tag :bordered="false" type="success" size="large"> 音频：2 </n-tag>
                <n-tag :bordered="false" type="success" size="large"> 视频：3</n-tag>
                <n-tag :bordered="false" type="success" size="large"> 其他：4 </n-tag>
              </n-space>
            </template>
          </n-thing>
        </n-list-item>
      </n-list>
    </template>
  </n-space>
</template>

<script lang="ts">
import ApiService from '@/services/api'
import { defineComponent, ref } from 'vue'
import Tabs from '@/components/Tabs.vue'
import Radio from '@/components/Radio.vue'

export default defineComponent({
  methods: {
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
    },
    update() {
      let newcode = ''
      if (this.choice === 'location') {
        newcode = this.updatevalue + this.code.substring(12, this.code.length + 1)
        console.log(newcode)
      } else if (this.choice === 'time') {
        newcode = this.code
      } else if (this.choice === 'source') {
        newcode = this.code
      } else if (this.choice === 'carrier') {
        newcode = this.code
      } else if (this.choice === 'disaster') {
        newcode = this.code
      }
      ApiService.updateDisaster(this.dbid, newcode)
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
      choice: ref(null),
      all: ref(''),
      one: ref(''),
      id: ref(0),
      dbid: ref(''),
      location: ref(''),
      time: ref(''),
      source: ref(''),
      carrier: ref(''),
      disaster: ref(''),
      code: ref(''),
      updatevalue: ref(''),
      fields: [
        {
          value: 'location',
          label: '地理信息'
        },
        {
          value: 'time',
          label: '发生时间'
        },
        {
          value: 'source',
          label: '来源'
        },
        {
          value: 'carrier',
          label: '载体'
        },
        {
          value: 'disaster',
          label: '灾情'
        }
      ].map((s) => {
        s.value = s.value.toLowerCase()
        return s
      })
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
