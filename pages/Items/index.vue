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
    });
    return {
        postsData: data.contents
    }
  }
}
</script>
