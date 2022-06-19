<template>
  <section class="sec-blog">
    <div class="container container--blogs">
      <div>
        <h2 class="section-title bg-masking-tape bg-masking-tape--3">ブログ</h2>
        <div class="blogs">
          <div class="blog" v-for="post in posts" :key="post.publishedAt">
            <!-- {{post}} -->
            <router-link :to="`/blogs/${post.id}/`" class="post__link">
                <div class="blog__inner">
                    <time :datetime="post.publishedAt" v-text="$dateFns.format(new Date(post.publishedAt), 'yyyy.MM.dd')" />
                    <h3 class="post__title">{{post.title}}</h3>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
        <div class="container" v-if="isTopPage">
            <div class="archive-nav-link">
                <router-link to="/blogs" class="nav-link-button">ブログ一覧へ</router-link>
            </div>
         </div>
  </section>
</template>

<script>
  export default {
    props: {
      // propsを受け取ってやればOk
      ['posts']: {
        type: Array,
        required: true
      }
    },
    computed: {
      isTopPage() {
        if (this.$route.name === 'index') return true
        return false
      },
    }
  }

</script>

<style scoped>
  .sec-blog {
    padding-top: 5rem;
    padding-bottom: 4rem;
    background-image: repeating-linear-gradient(-45deg, rgba(139,198,202,.09), rgba(139,198,202,.09) 10px, #fff 0, #fff 20px);
    position: relative;
  }

  .container--blogs{
    max-width: 1080px;
  }

  .blog{
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    /* background-color: #fff; */
    border-bottom: 2px solid #dddddd;
  }

  .blog:first-of-type{
    border-top: 2px solid #dddddd;
  }

  .post{
    height: 0;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
  }

  .post__link:hover .post__image img {
    transform: scale(1.1);
    transition: .5s;
  }

  .post__image {
    /* border-radius: 20px; */
    overflow: hidden;
    /* max-height: 250px; */
    transition: .5s;
  }

  .post__caption {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: #ffffff8c;
    padding: 1em;
    display: none;
}
.post__caption-inner {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.post__caption .post__title {
    height: 0;
    transition: .5s;
}

.post:hover .post__caption{
  display: block;
    animation: fadeIn 0.3s linear forwards;
  }

  .post:hover .post__title{
    height: 100%;
    transition: .5s;
  }


  .post__image img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    transition: .5s;
  }

</style>
