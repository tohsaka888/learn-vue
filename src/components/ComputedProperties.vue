<template>
  <div class="flex">
    <el-input v-model="value" />
    <el-button @click="countPlusValue = +value" type="primary">plus</el-button>
  </div>
  <div class="flex current-value">{{ countPlusValue }}</div>
  <div class="flex current-value">{{ isLarger ? 'yep' : 'nope' }}</div>
</template>
<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0,
      value: ''
    }
  },
  computed: {
    // 这种写法必须同时指定getter和setter
    countPlusValue: {
      // getter
      get(): number {
        return this.count
      },
      // setter
      set(value: number): void {
        this.count += value
      }
    },
    // 默认为getter,类型为function,不可接收参数
    isLarger(): boolean {
      return this.count >= 100
    }
  },
})
</script>
<style lang="css" scoped>
.flex {
  display: flex;
  width: 50%;
  margin: auto;
}

.current-value {
  font-size: 1.5rem;
}
</style>