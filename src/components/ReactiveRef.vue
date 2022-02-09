<template>
  <div class="container">
    <el-input v-model="newBook.name" placeholder="书名" />
    <el-input v-model="newBook.updateTime" placeholder="更新日期" />
    <div id="category">
      <el-select multiple placeholder="标签" v-model="newBook.category">
        <el-option v-for="item in options" :key="item" :value="item" />
      </el-select>
      <el-button @click="addNewBook">添加</el-button>
    </div>
  </div>
  <div class="mt24">
    <div class="count">库存数量: {{ booksNumber }}</div>
    <div class="count">库存数量: {{ inventory }}</div>
  </div>
  <template v-for="(book, index) in books">
    <component-basis :book="book" :index="index" intro="book" />
  </template>
</template>
  
<script setup lang='ts'>

import _ from 'lodash';
import { computed, reactive, ref, watch } from 'vue';

const options: string[] = ['奇幻', '日常', '机战']

type Book = {
  name: string;
  updateTime: string;
  category: string[];
}

const newBook = reactive<Book>({
  name: '',
  category: [],
  updateTime: ''
})

// 字符串等字面值使用Ref
const inventory = ref<number>(0)

// 对象数组使用Reactive
const books = reactive<Book[]>([])


// watch
watch(books, () => {
  inventory.value = books.length
  console.log(books)
})

// computed
const booksNumber = computed(() => books.length)

/**
 * 深拷贝newBook
 * @returns {any}
 */
const addNewBook = (): void => {
  books.push(_.cloneDeep(newBook))
}

</script>
  
<style scoped>
.form {
  width: 50%;
  margin: auto;
}
#category {
  width: 100%;
  display: flex;
}
#category > :nth-child(1) {
  flex: 1;
}
.container {
  width: 50%;
  margin: auto;
}
.mt24 {
  margin-top: 24px;
}
</style>