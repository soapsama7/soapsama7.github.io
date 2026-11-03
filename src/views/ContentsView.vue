<script setup>
import PageShell from '../components/PageShell.vue'

const items = [
  { no: '第一帖', title: '記事', desc: '技术笔记、学习记录与随笔。', to: '/articles' },
  { no: '第二帖', title: '奥付', desc: '关于我、联系方式与站点信息。', to: '/colophon' }
]
</script>

<template>
  <PageShell
    chapter="目次"
    no="―"
    title="目次"
    lead="点按条目进入；也可以不点，从右缘继续往后翻。"
    next="/articles"
  >
    <ul class="toc">
      <li v-for="item in items" :key="item.to">
        <RouterLink class="toc__row" :to="item.to">
          <span class="toc__no">{{ item.no }}</span>
          <span class="toc__name">{{ item.title }}</span>
          <span class="toc__desc">{{ item.desc }}</span>
        </RouterLink>
      </li>
    </ul>
  </PageShell>
</template>
