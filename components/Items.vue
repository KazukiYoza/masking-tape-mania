<template>
  <section class="sec-item">
    <div class="container container--blogs">
      <div>
        <h2 class="section-title bg-masking-tape">アイテム</h2>
        <div class="items">
          <div class="item" data-aos="fade-down" :data-aos-delay="index * 100 + 200" v-for="(item,index) in items"
            :key="item.createdAt">
            <!-- {{item}} -->
            <router-link :to="`/items/${item.id}/`" class="item__link">
              <div class="item__caption">
                <div class="item__caption-inner">
                  <h3 class="item__title">{{item.title}}</h3>
                  <p class="item__desc">{{item.excerpt}}</p>
                </div>
              </div>
              <figure class="item__image">
                <img v-bind:src="item.thumbnail.url" :alt="item.title">
              </figure>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="isTopPage">
      <div class="archive-nav-link">
        <router-link to="/items" class="nav-link-button">マステ一覧へ</router-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      // propsを受け取ってやればOk
      ['items']: {
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
  .sec-item::before {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    position: absolute;
    top: 0;
    /* background: repeating-linear-gradient(135deg, #454545, #454545 2px, #fff 2px, #fff 8px) */
  }

  .sec-item {
    padding-top: 5rem;
    padding-bottom: 4rem;
    background-color: #FFD24C;
    background-image: radial-gradient(#FCC800 30%, transparent 30%), radial-gradient(#FCC800 30%, transparent 30%);
    background-size: 70px 70px;
    background-position: 0px 0, 35px 35px;
    position: relative;
  }

  .container--blogs {
    max-width: 1080px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 15px;
  }

  .item {
    height: 0;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
  }

  .item__link:hover .item__image img {
    transform: scale(1.1);
    transition: .5s;
  }

  .item__image {
    overflow: hidden;
    transition: .5s;
  }

  .item__caption {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: #ffffff8c;
    padding: 1em;
    display: none;
  }

  .item__caption-inner {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .item__caption .item__title {
    height: 0;
    transition: .5s;
  }

  .item:hover .item__caption {
    display: block;
    animation: fadeIn 0.3s linear forwards;
  }

  .item:hover .item__title {
    height: 100%;
    transition: .5s;
  }

  .maste-tape {
    position: absolute;
    top: -0.75em;
    left: -0.5em;
    z-index: 1;
    background-color: #fff6d3;
    border-left: 4px solid #8BC6CA;
    padding: 0.25em 1em;
    color: #454545;
    transform: rotate(-3deg);
  }

  .item__image img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    transition: .5s;
  }

  @media screen and (max-width: 649px) {
    .item:nth-of-type(2n) {
      margin-right: 0;
    }

    .item__title {
      font-size: 0.9rem;
      margin-bottom: 10px;
    }

    .item__desc {
      font-size: 0.8rem;
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 650px) {
    .items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 15px;
      row-gap: 15px;
    }

    .item:nth-of-type(3n) {
      margin-right: 0;
    }
  }

</style>
