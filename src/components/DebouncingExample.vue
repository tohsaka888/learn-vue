<template>
  <div>
    <el-button type="primary" @click="debouncedClick">click</el-button>
  </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import _ from 'lodash'

// type DebouncedClickFunc = (...args: any) => void
export default defineComponent({
  data() {
    return {
      debouncedClick: new Function as _.DebouncedFunc<() => void>
    }
  },
  created() {
    this.debouncedClick = _.debounce(this.click, 500)
  },
  methods: {
    click() {
      console.log('clicked')
    }
  },
  unmounted() {
    this.debouncedClick.cancel()
  },
})
</script>