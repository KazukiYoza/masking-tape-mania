<template>
  <section class="sec-about" :style="{backgroundColor:data.bgColor}">
    <div class="container">
      <div :class="{about__inner:true, rowReverse:data.reverse}">
        <div class="about__image" :data-aos="[data.reverse  ? 'fade-left' : 'fade-right']">
          <img :src="`${data.img}`" alt="">
        </div>
        <div class="about__body">
          <h2 class="about__title">{{ data.title }}</h2>
          <p class="about__text" v-html="data.text">
            <!-- {{data.text}} -->
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      // propsを受け取ってやればOk
      ['data']: {
        bgColor: String,
        reverse: Boolean,
        img: String,
        title: String,
        text: String,
        // type: Array,
        required: true
      }
    }
  }

</script>

<style scoped>
  .about {
    /* padding-top: 5rem; */
    /* padding-bottom: 5rem; */
    background-color: #F3D6E3;
  }

  .about__inner {
    display: grid;
    grid-template-rows: 90px 1fr auto;
    grid-template-areas:
      "title"
      "image"
      "text";
  }

  .about__body {
    padding: 1rem;
    display: contents;
  }

  .about__title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    grid-area: title;
    padding-top: 1rem;
  }

  .about__text {
    padding-top: 1rem;
    grid-area: text;
  }

  .about__image {
    /* width: 50vw; */
    width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    grid-area: image;
  }

  .about__image::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .about__image img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    object-fit: cover;
  }

  @media screen and (min-width: 650px) {
    .about__inner {
      display: flex;
      flex-direction: row;
    }

    .about__body {
      width: 40%;
      padding: 1rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
    }

    .rowReverse {
      flex-direction: row-reverse;
    }

      .about__image {
        /* width: 50vw; */
        width: max(50%, 350px);
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }
  }

</style>
