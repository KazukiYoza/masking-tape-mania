<template>
  <div class="container">
    <div>
        {{ posts }}
    </div>
  </div>
</template>

<script>
  export default {
  async asyncData({ app }) {
    const [productions] = await Promise.all([
      app.$axios.get('https://kazuki0323.microcms.io/api/v1/news', { headers: {'X-MICROCMS-API-KEY': '57f8c0f55b474f69ba56f1255bb6548c4bbd'} })
    ])
    return {
      posts: productions.data
    }
  },
}
</script>
