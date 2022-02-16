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
    <div class="count" :style="{ fontSize: fontSize + 'rem' }">库存数量: {{ booksNumber }}</div>
    <div class="count" :style="{ fontSize: fontSize + 'rem' }">库存数量: {{ inventory }}</div>
  </div>
  <template v-for="(book, index) in books">
    <component-basis :book="book" :index="index" intro="book" @enlarge-text="enlargeText" />
  </template>
  <div ref="divRef">{{ state.count }}</div>
  <el-button @click="increment">increment</el-button>
</template>
  
<script setup lang='ts'>

import _ from 'lodash';
import { computed, nextTick, reactive, ref, watch } from 'vue';

const options: string[] = ['奇幻', '日常', '机战']
const fontSize = ref<number>(1)

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


const divRef = ref<HTMLDivElement>()
// 对象数组使用Reactive
// 不推荐的写法
// const books = reactive<Book[]>([])

// 推荐的写法
const books: Book[] = reactive([])

const state: { count: number } = reactive({ count: 0 })

const increment = () => {
  let id = setInterval(() => {
    state.count++
    // 0, 1, 2, 3, 4
    console.log(divRef.value?.innerHTML)
    // 获取更新后的DOM
    nextTick(() => {
      // 1, 2, 3, 4, 5
      console.log(divRef.value?.innerHTML)
    })
    if (state.count === 5) {
      clearInterval(id)
    }
  }, 1000)
}

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

/**
 * 放大字体
 * @returns {any}
 */
const enlargeText = (enlargeNum: number) => {
  fontSize.value += enlargeNum
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