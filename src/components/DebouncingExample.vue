<template>
  <div>
    <el-button type="primary" @click="debouncedClick">click</el-button>
  </div>
</template>
<script lang="ts">import { defineComponent } from "vue";
import _ from 'lodash'
export default defineComponent({
  data() {
    return {
      debouncedClick: null as any
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
})
</script>