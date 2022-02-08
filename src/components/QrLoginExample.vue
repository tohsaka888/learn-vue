<template>
  <div>
    <div class="info">请打开网易云音乐扫码登录</div>
    <img :src="qrimgUrl" :alt="qrimgUrl" />
    <div class="qr-status">{{ qrStatus }}</div>
  </div>
</template>
  
<script setup lang='ts'>
import { onUnmounted, ref, watch } from 'vue';
import { baseUrl } from '../../config/baseUrl'

const qrkey = ref<string>('')
const qrimgUrl = ref<string>('')
const intervalId = ref<number>(0)
const qrStatus = ref<string>('')

/**
 * 创建二维码key
 * @returns {any}
 */
const createQrKey = async () => {
  const res = await fetch(`${baseUrl}/login/qr/key`)
  const data = await res.json()
  qrkey.value = data.data.unikey
}

/**
 * 创建二维码
 * @returns {any}
 */
const createQrImage = async () => {
  if (qrkey.value !== '') {
    const res = await fetch(`${baseUrl}/login/qr/create?key=${qrkey.value}&qrimg=true`)
    const data = await res.json()
    qrimgUrl.value = data.data.qrimg
  }
}

/**
 * 检验二维码状态
 * @returns {any}
 */
const checkQrStatus = async () => {
  const res = await fetch(`${baseUrl}/login/qr/check?key=${qrkey.value}`)
  const data = await res.json()
  if (data.code !== 801 && data.code !== 802) {
    window.clearInterval(intervalId.value)
  }
  qrStatus.value = data.message
}

// 方式1 Promise
// createQrKey().then(() => {
//   createQrImage()
//   intervalId.value = window.setInterval(() => {
//     checkQrStatus()
//   }, 3000)
// })

// 方式2 监听器
createQrKey()

watch(qrkey, () => {
  createQrImage()
  intervalId.value = window.setInterval(() => {
    checkQrStatus()
  }, 3000)
})



// 卸载定时器
onUnmounted(() => {
  window.clearInterval(intervalId.value)
})
</script>

<style scoped>
.info {
  font-size: 1.5rem;
  font-weight: bold;
}

.qr-status {
  font-weight: bold;
}
</style>