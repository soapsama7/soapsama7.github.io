<script setup>
import { RouterView } from 'vue-router'
import { direction } from './nav'
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
