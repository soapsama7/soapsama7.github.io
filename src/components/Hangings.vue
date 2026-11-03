<script setup>
// 从页面顶端垂下来的装饰线，线尾挂一个线描小件
defineProps({
  tone: {
    type: String,
    default: 'dark' // 'dark' = 深色线条（浅色纸面），'light' = 米色线条（深蓝封面）
  }
})
</script>

<template>
  <div class="hangs" :class="'hangs--' + tone" aria-hidden="true">
    <span class="hang hang--diamond"><i /></span>
    <span class="hang hang--ring"><i /></span>
    <span class="hang hang--diamond"><i /></span>
    <span class="hang hang--ring"><i /></span>
  </div>
</template>
