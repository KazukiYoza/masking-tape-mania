<template>
  <div>
    <Header/>
    <Items :items="postsData"/>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'maste',
      queries: {
        limit: 30,
        offset: 0,
      },
    });
    return {
        postsData: data.contents
    }
  }
}
</script>
