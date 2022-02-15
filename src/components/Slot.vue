<template>
  <!-- 提供默认值 -->
  <slot name="inputArea">This is Input Area</slot>
  <div class="submit-area">
    <slot name="submitArea">This is Submit Area</slot>
  </div>
</template>
  
<script lang='ts'>

import { defineComponent } from "vue"

export default defineComponent({

})
</script>
  
<style>
.input-area {
  margin: auto;
}

.submit-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
</style>