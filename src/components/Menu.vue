<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :value="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        key-field="whateverKey"
        label-field="whateverLabel"
        children-field="whateverChildren"
      />
    </n-layout-sider>
    <n-layout />
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, h, ref, type Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  Bulb as BulbIcon,
  Person as PersonIcon,
  BarChart as AnalyzeIcon,
  PersonCircleOutline as PersonCircleIcon,
  CloudUpload as UploadIcon,
  Bookmarks as ViewIcon,
  Build as ModifyIcon
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    whateverLabel: '数据中心',
    whateverKey: 'data-center',
    icon: renderIcon(BulbIcon),
    whateverChildren: [
      {
        whateverLabel: '数据上传',
        whateverKey: 'data-update',
        icon: renderIcon(UploadIcon)
      },
      {
        whateverLabel: '查看数据',
        whateverKey: 'view-data',
        icon: renderIcon(ViewIcon)
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    whateverLabel: '分析展示',
    whateverKey: 'analyse-and-visualize',
    icon: renderIcon(AnalyzeIcon)
  },
  {
    type: 'divider'
  },
  {
    whateverLabel: '个人中心',
    whateverKey: 'user-center',
    icon: renderIcon(PersonCircleIcon),
    whateverChildren: [
      {
        whateverLabel: '查看信息',
        whateverKey: 'view-info',
        icon: renderIcon(PersonIcon)
      },
      {
        whateverLabel: '修改信息',
        whateverKey: 'modify-info',
        icon: renderIcon(ModifyIcon)
      }
    ]
  }
]

export default defineComponent({
  setup() {
    return {
      collapsed: ref(false),
      menuOptions
    }
  }
})
</script>
