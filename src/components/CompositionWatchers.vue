<template>
  <el-table :data="songs" stripe v-if="songs.length > 0" border>
    <el-table-column label="歌曲名" prop="name" />
    <el-table-column label="歌手" prop="ar">
      <template #default="scope">
        <span v-for="ar in scope.row.ar">{{ ar.name }}</span>
      </template>
    </el-table-column>
    <!-- error al不是对象? -->
    <el-table-column label="专辑" prop="al">
      <template #default="scope">
        <span v-for="al in scope.row.al">{{ al.name }}</span>
      </template>
    </el-table-column>
  </el-table>
  <div class="flex">
    <el-pagination
      v-model:currentPage="offset"
      v-model:page-size="limit"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout="sizes, prev, pager, next"
      :total="1000"
    />
  </div>
</template>
  
<script setup lang='ts'>
import { ref, watchEffect } from 'vue';
import { baseUrl } from '../../config/baseUrl';

const playlistId = ref<number>(967418382)
const limit = ref<number>(10)
const offset = ref<number>(1)
const playlistLength = ref<number>(0)
let songs = ref<any[]>([])
const login = async () => {
  const res = await fetch(`${baseUrl}/login/cellphone`, {
    method: 'POST',
    body: JSON.stringify({ phone: 13770795819, md5_password: 'ca2d7eb95d7e2d3e1a6b7479be80e26d' }),
    headers: { "Content-Type": "application/json;charset=utf-8" }
  })
  const data = await res.json()
}

const getPlaylistLength = async () => {
  const res = await fetch(`${baseUrl}/playlist/detail?id=${playlistId.value}`, {
    credentials: 'include'
  })
  const data = await res.json()
  console.log(data.playlist.trackCount)
  playlistLength.value = data.playlist.trackCount
}

const getPlaylistDetail = async () => {
  const res = await fetch(`${baseUrl}/playlist/track/all?id=${playlistId.value}&limit=${limit.value}&offset=${offset.value - 1}`, {
    method: 'GET',
    credentials: 'include'
  })
  const data = await res.json()
  songs.value = data.songs
  console.log(data.songs)
}

login().then(() => {
  getPlaylistLength()
  watchEffect(getPlaylistDetail)
})

</script>
  
<style>
.flex {
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
}
</style> 