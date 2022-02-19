<template>
    <div class="title">方式1</div>
    <div>{{ book.name }}</div>
    <div>{{ book.price }}</div>
    <div>{{ borrowStatus }}</div>
    <el-button @click="changeBorrowStatus">借阅</el-button>
    <div class="title">方式2</div>
    <div>{{ book.name }}</div>
    <div>{{ book.price }}</div>
    <div>{{ borrowStatus2 }}</div>
    <el-button @click="borrowStatus2 = !book.status">借阅</el-button>
</template>
  
<script setup lang='ts'>
import { computed, reactive } from 'vue';

const book = reactive({
    name: '86',
    price: 20,
    status: false
})

// 方式1 传递函数 只能已getter形式调用
const borrowStatus = computed(() => {
    return book.status
})

// 方式2 传递getter setter对象
const borrowStatus2 = computed({
    get: () => {
        return book.status
    },
    set: (value: boolean) => {
        book.status = value
    }
})

const changeBorrowStatus = () => {
    book.status = !book.status
    console.log('ok')
}

</script>
  
<style>
</style>