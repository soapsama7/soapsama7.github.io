<script setup>
import PageShell from '../components/PageShell.vue'
</script>

<template>
  <PageShell
    chapter="奥付"
    no="02"
    title="奥付"
    lead="书籍最后一页记着版本、印数和作者。这里放关于我和站点信息。"
  >
    <table class="info">
      <tbody>
        <tr>
          <th>著者</th>
          <td>soap</td>
        </tr>
        <tr>
          <th>趣味</th>
          <td>Java 后端 / AI 应用 / 日系事物</td>
        </tr>
        <tr>
          <th>連絡</th>
          <td>（待填写）</td>
        </tr>
        <tr>
          <th>版元</th>
          <td>myBlog 私家版 第一号</td>
        </tr>
      </tbody>
    </table>

    <div class="stub">この先はまだ白紙です。</div>
  </PageShell>
</template>
