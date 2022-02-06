<script setup lang="ts">
import { catalogue } from './catalogue'
import { Right } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const linkTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <el-row style="margin-top: 36px; width: 100%;">
    <el-col :span="6" v-for="item in catalogue">
      <div class="flex">
        <el-button type="primary" :icon="Right" circle @click="linkTo(item.path)" />
        <div @click="linkTo(item.path)" class="title">{{ item.title }}</div>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  margin-left: 16px;
  cursor: pointer;
}

.title:hover {
  text-decoration: underline;
}
</style>
