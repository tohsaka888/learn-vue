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
  <el-row style="margin: 36px 24px;" :gutter="20">
    <el-col :span="6" v-for="item in catalogue">
      <div class="flex container">
        <el-button type="primary" :icon="Right" circle @click="linkTo(item.path)" />
        <div @click="linkTo(item.path)" class="title">{{ item.title }}</div>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 32px;
}

.title {
  font-size: 1.2rem;
  margin-left: 16px;
  cursor: pointer;
}

.title:hover {
  text-decoration: underline;
}

.container {
  background-color: #f5f4f4;
  padding: 8px 16px;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 10px #cecece;
}
</style>
