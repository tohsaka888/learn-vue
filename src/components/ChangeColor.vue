<template>
  <div class="flex-layout">
    <div :id="theme === 'light' ? 'light-theme' : 'dark-theme'" class="container" />
    <el-button type="primary" @click="toggleBackground">Toggle</el-button>
  </div>
</template>
<script lang="ts">

import { defineComponent } from "vue"

// 要让 TypeScript 正确推断 Vue 组件选项中的类型，需要使用 defineComponent 全局方法定义组件
export default defineComponent({
  data() {
    return {
      theme: 'light'
    }
  },
  created() {
    this.theme = 'dark' // 赋值操作
    this.fetchInitData() // 页面渲染前获取数据
  },
  methods: {
    toggleBackground(): void {
      switch (this.theme) {
        case 'light':
          this.theme = 'dark'
          break;
        case 'dark':
          this.theme = 'light'
      }
    },
    fetchInitData(): void {

    }
  }
})
</script>
<style lang="css" scoped>
#light-theme {
  background-color: white;
  box-shadow: 0px 0px 30px 10px #cecece;
}

#dark-theme {
  background-color: black;
  box-shadow: 0px 0px 30px 10px #010825;
}

.container {
  width: 300px;
  height: 300px;
  margin-bottom: 16px;
  border: 1px solid #cecece;
}

.flex-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>