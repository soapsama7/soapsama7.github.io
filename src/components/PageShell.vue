<script setup>
import { useRouter } from 'vue-router'
import Hangings from './Hangings.vue'

const props = defineProps({
  chapter: { type: String, default: '' },
  no: { type: String, default: '' },
  title: { type: String, default: '' },
  lead: { type: String, default: '' },
  next: { type: String, default: '' } // 顺序上的下一页路径，空表示这是最后一页
})

const router = useRouter()
const turn = () => {
  if (props.next) router.push(props.next)
}
</script>

<template>
  <section class="page">
    <Hangings tone="dark" />
    <div class="page__shade" />

    <header class="page__head">
      <span>{{ chapter }}</span>
      <span>{{ no }}</span>
    </header>

    <div class="page__scroll">
      <div class="page__body">
        <p class="page__eyebrow">{{ no }} ・ {{ chapter }}</p>
        <h2 class="page__title"><span>{{ title }}</span></h2>
        <p v-if="lead" class="page__lead">{{ lead }}</p>
        <slot />
      </div>
    </div>

    <footer class="page__foot">
      <button class="foot-btn" @click="router.back()">← 戻る</button>
      <span class="foot-btn foot-btn--ghost">{{ no }}</span>
      <button v-if="next" class="foot-btn" @click="turn">次の頁 →</button>
      <span v-else class="foot-btn foot-btn--ghost">― 終 ―</span>
    </footer>

    <button v-if="next" class="page__edge" aria-label="次の頁へ" @click="turn" />
  </section>
</template>
