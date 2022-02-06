<template>
  <div>
    <el-button @[event]="doSomeThing">Click Me</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      event: 'click'
    }
  },
  methods: {
    doSomeThing() {
      console.log('do something')
      // 点击后触发事件为mouseover
      this.event = 'mouseover'
    }
  },
})
</script>
<style lang="css">
</style>