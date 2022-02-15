<template>
  <SlotVue>
    <template v-slot:inputArea>
      <div class="inputArea">
        <el-input />
        <el-input />
        <el-input />
        <el-input />
      </div>
    </template>
    <template v-slot:submitArea>
      <el-button type="primary">Submit</el-button>
    </template>
  </SlotVue>
</template>
  
<script setup lang='ts'>
import SlotVue from './Slot.vue';
</script>
  
<style scoped>
.inputArea {
  width: 50%;
  margin: auto;
}

.inputArea > * {
  margin-top: 8px;
}
</style>