<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { direction } from './nav'

const router = useRouter()

// 线性的页序，用于键盘翻页
const ORDER = ['/', '/contents', '/articles', '/colophon']

function onKeydown (e) {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
  const i = ORDER.indexOf(router.currentRoute.value.path)
  if (e.key === 'ArrowRight') {
    if (i >= 0 && i < ORDER.length - 1) router.push(ORDER[i + 1])
  } else if (e.key === 'ArrowLeft') {
    if (i > 0) router.back()
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="stage">
    <!-- 注意：不要加 mode="out-in"，翻页时新旧两页必须同时在场上，
         旧页盖在新页上面被裁掉，新页在下面露出来 -->
    <RouterView v-slot="{ Component, route }">
      <Transition :name="'turn-' + direction">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </div>
</template>
