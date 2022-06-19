<template>
  <div>
    <Header/>
    <Blogs :posts="postsData"/>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'news',
    });
    return {
        postsData: data.contents
    }
  }
}
</script>
