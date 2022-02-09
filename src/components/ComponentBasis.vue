<template>
  <div class="container flex">
    <div class="index">{{ index }}</div>
    <div class="info" v-for="(value, key) in book">{{ key }} -> {{ value }}</div>
  </div>
</template>
  
<script lang='ts'>

import { defineComponent, PropType } from "vue";
import { Book } from "./BookType";

export default defineComponent({
  props: {
    intro: String,
    book: {
      type: Object as PropType<Book>,
      required: true
    },
    index: {
      type: Number,
      required: true,
    }
  }
})

</script>
  
<style scoped>
.container {
  width: 50%;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.index {
  font-size: 1rem;
  font-weight: bold;
}

.info {
  background-color: #cecece;
}
</style>