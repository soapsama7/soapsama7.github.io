<script setup>
import { useRouter } from 'vue-router'
import Hangings from '../components/Hangings.vue'

const router = useRouter()
const open = () => router.push('/contents')
</script>

<template>
  <section class="page page--cover">
    <Hangings tone="light" />
    <div class="page__shade" />

    <div class="page__scroll cover">
      <div class="cover__inner">
        <p class="cover__vertical">本をめくるように、読んでください。</p>

        <p class="cover__imprint">
          <span>私家版</span>
          <span>第一号</span>
        </p>

        <p class="cover__kicker">ちいさなもの語り</p>
        <h1 class="cover__title"><span>ものがたり</span></h1>
        <p class="cover__sub">myBlog ／ soap の記録</p>

        <!-- 之后换成真实头像：<img class="cover__avatar" src="/avatar.jpg" alt="头像" /> -->
        <div class="cover__avatar" aria-label="头像占位">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
            <path d="M12 6h24v36l-12-8-12 8z" />
            <path d="M19 17h10" />
          </svg>
        </div>

        <button class="cover__obi" @click="open">
          <span>夜のあいだに、少しずつ。</span>
          <span class="cover__obi-go">次の頁へ →</span>
        </button>

        <p class="cover__hint">也可以点页面右缘，或用键盘 → 翻页</p>
      </div>
    </div>

    <button class="page__edge" aria-label="次の頁へ" @click="open" />
  </section>
</template>
