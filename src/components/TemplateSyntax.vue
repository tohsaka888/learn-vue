<template>
  <div>
    <el-button
      v-if="isShow"
      :disabled="disabled"
      @click="toggleState"
    >{{ disabled ? 'disbled' : 'un-disabled' }}</el-button>
  </div>
</template>
<script lang="ts">import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      disabled: false,
      isShow: true
    }
  },
  methods: {
    toggleState(): void {
      this.disabled = !this.disabled
      setTimeout(() => {
        this.isShow = !this.isShow
      }, 1000)
    }
  },
})
</script>
<style lang="css">
</style>