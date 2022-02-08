<template>
  <div class="form">
    <el-input v-model="newBook.name" placeholder="书名" />
    <el-input v-model="newBook.updateTime" placeholder="更新日期" />
    <div id="category">
      <el-select multiple placeholder="标签" v-model="newBook.category">
        <el-option v-for="item in options" :key="item" :value="item" />
      </el-select>
      <el-button @click="addNewBook">添加</el-button>
    </div>
    <div class="info">显示机战标签书籍</div>
    <!-- <div class="result">{{ isFight.map(item => item.name) }}</div> -->
    <div
      style="display: flex;justify-content: center;align-items: center;"
      v-for="(book, index) in isFight"
    >
      <div id="index">{{ index + 1 }}.</div>
      <div class="result" v-for="(value, key) in book">{{ key }}:{{ value }}//</div>
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import _ from 'lodash'

type Book = {
  name: string;
  category: string[];
  updateTime: string;
}

const books: Book[] = [
  {
    name: '86不存在的战区',
    category: ['机战', '热血', '恋爱'],
    updateTime: '2022-2-7'
  },
  {
    name: '凉宫春日的忧郁',
    category: ['奇幻', '日常'],
    updateTime: '2022-2-7'
  }
]

const options: string[] = ['奇幻', '日常', '机战']

export default defineComponent({
  data() {
    return {
      books,
      result: [] as Book[],
      newBook: {
        name: '',
        category: [],
        updateTime: '',
      } as Book,
      options
    }
  },
  // 注意: this不可省略,否则不会响应式更新
  computed: {
    isFight(): Book[] {
      console.log(this.books)
      let bookIndex: number[] = []
      for (let i = 0; i < this.books.length; i++) {
        let category = this.books[i].category
        for (let j = 0; j < category.length; j++) {
          if (category[j] === '机战') {
            bookIndex.push(i)
            break;
          }
        }
      }
      let result: Book[] = []
      // deepclone 否则插入新值会改变旧值
      bookIndex.map(index => {
        result.push(_.cloneDeep(books[index]))
      })
      return result
    }
  },
  // 监听的如果是个数组 只有数组被替换时才能触发事件
  // 如果你需要在数组被改变时触发回调，必须指定 deep 选项 对象同理
  watch: {
    books: {
      handler() {
        console.log('update')
      },
      deep: true
    }
  },
  methods: {
    addNewBook() {
      this.books.push(this.newBook)
    }
  },
})
</script>
<style lang="css" scoped>
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
</style>