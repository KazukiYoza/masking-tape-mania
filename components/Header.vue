<template>
  <header :class="{header:true, active:spMenu}">
    <div class="header-container">
      <!-- ロゴ -->
      <h1 class="site">
        <router-link to="/">
          <!-- <p>logo</p> -->
          <img src="~/assets/images/site-logo.png" alt="">
        </router-link>
      </h1>

      <!-- メニュー -->
      <nav class="global-nav">
        <ul class="menus">
          <li class="menu">
            <router-link to="/" class="menu__link">トップ</router-link>
          </li>
          <li class="menu">
            <router-link to="/items" class="menu__link">マステ</router-link>
          </li>
          <li class="menu">
            <router-link to="/blogs" class="menu__link">ブログ</router-link>
          </li>
          <li class="menu">
            <a href="https://forms.gle/tUTuusoLepvCx1Da6" class="menu__link">お問い合わせ</a>
          </li>
        </ul>
      </nav>

      <!-- ハンバーガーメニュー -->
      <template v-if="this.windowWidth <= 650">
        <div class="circle-bg"></div>
        <template v-if="isTopPage">
          <a href="javascript:void(0)" class="nav-button is-top" v-if="visible" @click="spMenuToggle()"><span class="nav-button__bar"></span>
        </a>
        </template>
        <template v-else>
          <a href="javascript:void(0)" class="nav-button" @click="spMenuToggle()"><span class="nav-button__bar"></span>
        </a>
        </template>
          
      </template>
    </div><!-- ./header-container -->

  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        spMenu: false,
        windowWidth: "",
        visible: false,
      }
    },
    methods: {
      spMenuToggle() {
        this.spMenu = !this.spMenu;
      },
      calculateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },
      handleScroll() {
        if (!this.visible) {
          var top = this.$el.getBoundingClientRect().top;
          this.visible = top < window.innerHeight - 500;
        }
      }
    },
    computed: {
      // TOPページかどうか
      isTopPage() {
        if (this.$route.name === 'index') return true
        return false
      }
    },
    mounted() {
      window.addEventListener('resize', this.calculateWindowWidth);
      this.windowWidth = window.innerWidth;
      window.addEventListener("scroll", this.handleScroll);
    },
  }

</script>

<style scoped>
  .header {
    /* position: fixed; */
    position: sticky;
    width: 100%;
    top: 0;
    background-color: #fff;
    z-index: 100;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .header::before {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: -5px;
    background: repeating-linear-gradient(135deg, #454545, #454545 4px, #fff 4px, #fff 8px)
  }

  .header-container {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: .5rem;
    padding-right: .5rem;
  }

  /*丸の拡大*/
  .circle-bg {
    position: fixed;
    z-index: 3;
    /*丸の形*/
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: repeating-linear-gradient(135deg, #fff6d3, #fff6d3 1px, #fff 1px, #fff 2px);
    /*丸のスタート位置と形状*/
    transform: scale(0);
    /*scaleをはじめは0に*/
    /* right: -50px;
    top: -50px; */
    right: -50px;
    bottom: -50px;
    transition: all .6s;
    /*0.6秒かけてアニメーション*/
  }

  .active .circle-bg {
    transform: scale(22);
    /*クラスが付与されたらscaleを拡大*/
  }

  .site {
    max-width: 200px;
  }

  .site img {
    width: 100%;
    height: auto;
  }

  .global-nav {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    z-index: 99;
  }

  .active .global-nav {
    display: block;
    animation: fadeIn 1s linear forwards;
  }

  .menus {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu {
    /* padding: 1em 0.5em; */
    padding: 0.25em 0.5em;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    transition: .3s;
  }

  .menu:hover .menu__link {
    color: #e92b90;
    transition: .3s;
  }

  .menu__link:after {
    content: "";
    display: block;
    width: 0%;
    height: 5px;
    background-color: #e92b90;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: .5s;
  }

  .menu:hover .menu__link:after {
    width: 100%;
    transition: .5s;
  }

  @media screen and (max-width: 649px) {
    .site {
      margin: 0 auto;
    }

    .menu {
      width: fit-content;
      margin-bottom: 1.5rem;
    }

    .nav-button {
      -webkit-tap-highlight-color: transparent;
      all: unset;
      display: grid;
      place-items: center;
      aspect-ratio: 1/1;
      width: max(53px, 5vw);
      outline: revert;
      color: #fff;
      background-color: #FCC800;
      border-radius: 50%;
      z-index: 1000;
      margin-left: auto;
      position: fixed;
      right: 5%;
      bottom: 5%;
      box-shadow: 1px 1px 4px 1px #a9a9a9;
      opacity: 0;
      animation: fadeIn .1s linear forwards;
    }

    .nav-button__bar,
    .nav-button::before,
    .nav-button::after {
      -webkit-transition: 0.5s;
      display: block;
      grid-area: 1/1;
      width: 50%;
      height: 2px;
      background-color: currentColor;
      content: "";
      transition: 0.5s;
    }

    .nav-button::before {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }

    .nav-button::after {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }

    .active .nav-button {
      box-shadow: none;
      background-color: transparent;
      color: #FCC800;
    }

    .active .nav-button__bar {
      transform: scale(0);
    }

    .active .nav-button::before {
      -webkit-transition: 0.5s;
      -webkit-transform: translateY(0) rotate(45deg);
      transform: translateY(0) rotate(45deg);
      transition: 0.5s;
    }

    .active .nav-button::after {
      -webkit-transition: 0.5s;
      -webkit-transform: translateY(0) rotate(-45deg);
      transform: translateY(0) rotate(-45deg);
      transition: 0.5s;
    }


  }

  @media screen and (min-width: 650px) {
    .header {
      position: sticky;
      top: 0;
    }

    .header-container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .site {
      max-width: 230px;
    }

    .global-nav {
      position: relative;
      margin-left: auto;
      width: min(60%, 500px);
      height: auto;
      background-image: inherit;
      display: block;
      opacity: 1;
    }

    .menus {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .menu {
      padding: 0.25em 0.5em;
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

</style>
