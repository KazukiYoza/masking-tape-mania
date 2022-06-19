<template>
  <div>
    <div class="mv">
      <div class="mv__inner">
        <div class="slider-outer slider-outer--1">
          <div class="masking-tape slider-left1 slideUpLoop"></div>
        </div>
        <div class="slider-outer slider-outer--2">
          <div class="masking-tape slider-left2 slideDownLoop"></div>
        </div>
        <div class="mv__body">
          <figure class="mv__logo">
            <img src="~/assets/images/mv-logo.png" alt="">
          </figure>
          <div class="scroll-down"><span>scroll</span></div>
        </div>
        <div class="slider-outer slider-outer--3">
          <div class="masking-tape slider-right1 slideUpLoop"></div>
        </div>
        <div class="slider-outer slider-outer--4">
          <div class="masking-tape slider-right2 slideDownLoop"></div>
        </div>
      </div>
    </div>
    <Header />
    <section class="section sec-lead">
      <div class="lead__inner container">
        <h2 class="section-title">マスキングテープが好きです。</h2>
        <figure class="lead-image">
          <img src="../static/images/image-masking-tape.png" alt="">
        </figure>
        <p>
          元々は塗装の保護用などで使用されていた<br class="sp-only">マスキングテープ。<br>
          最近はおしゃれなデザインのものも多く、<br class="sp-only">今やすっかり文房具の定番商品として大人気です。<br>
          100円ショップや文房具売り場などでも、<br class="sp-only">種類豊富なマスキングテープが並びます。</p>

        <p>マスキングテープと聞くと、<br class="sp-only">女性らしいカワイイものを思い浮かべますが<br>
          ここ数年、男子も楽しめる遊び心をくすぐるような<br class="sp-only">マスキングテープも増えてきました。<br><br>
          バラエティ豊かなマスキングテープの世界。<br>
          そんなマスキングテープが好きなボクの<br class="sp-only">マスキングテープの記録です。</p>
      </div>
    </section>
    <About :data="aboutAreaData[1]" />
    <About :data="aboutAreaData[0]" />
    <Blogs :posts="dataNews" />
    <Items :items="dataMaste" />
  </div>
</template>

<script>
  export default {
    name: 'TopPage',
    data() {
      return {
        aboutAreaData: [{
            title: 'サイトについて',
            text: '今まで買ったマスキングテープを紹介します。ご当地マステなどが好きで旅行に行ったりすると、よく買ったりします。何か面白いマステをご存知でしたら教えていただけると嬉しいです。<br>あ、ちなみにこのサイトはNuxt.jsで作成しました。',
            reverse: false,
            bgColor: "#F3D6E3",
            img: './images/image-section01.jpg',
          },
          {
            title: 'プロフィール',
            text: '沖縄在住34歳の男です。普段はWEBサイト等を作るお仕事をしています。<br>手帳が好きでライフログを書いているうちにマステの魅力にハマっていきました。手帳好き、文房具好きというと女性が多く男性が少ない印象なのでマステ男子、手帳男子と繋がれると嬉しいです。',
            reverse: true,
            bgColor: "#C7DCD3",
            img: './images/image-section02.jpg',
          }
        ],
      }
    },
    async asyncData({
      $microcms
    }) {
      const dataNews = await $microcms.get({
        endpoint: 'news',
        queries: {
          limit: 3 
          },
      });
      const dataMaste = await $microcms.get({
        endpoint: 'maste',
        queries: { 
          limit: 12,
          offset: 0,
         },
      });
      return {
        dataNews: dataNews.contents,
        dataMaste: dataMaste.contents
      }
    }
  }

</script>

<style scoped>
  .mv {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: repeating-linear-gradient(135deg, #fff6d3, #fff6d3 40px, #fff 40px, #fff 80px);
  }

  .mv__logo {
    width: clamp(20.625rem, 10.282rem + 43.55vw, 37.5rem);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .mv__logo img {
    width: 100%;
    height: auto;
  }

  /*スクロールダウン全体の場所*/
.scroll-down{
    /*描画位置※位置は適宜調整してください*/
	position:absolute;
	left:50%;
	bottom:6%;
    /*全体の高さ*/
	height:50px;
  z-index: 2;
}

/*scrollテキストの描写*/
.scroll-down span{
    /*描画位置*/
	position: absolute;
	left:-15px;
	top: -15px;
    /*テキストの形状*/
	color: #555;
	font-size: 1rem;
	letter-spacing: 0.05em;
}

/* 線の描写 */
.scroll-down::after{
	content: "";
    /*描画位置*/
	position: absolute;
	top: 0;
  left:5px;
    /*線の形状*/
	width: 1px;
	height: 30px;
	background: #555;
    /*線の動き1.4秒かけて動く。永遠にループ*/
	animation: pathmove 1.4s ease-in-out infinite;
	opacity:0;
}

/*高さ・位置・透過が変化して線が上から下に動く*/
@keyframes pathmove{
	0%{
		height:0;
		top:0;
		opacity: 0;
	}
	30%{
		height:30px;
		opacity: 1;
	}
	100%{
		height:0;
		top:50px;
		opacity: 0;
	}
}

  .slideUpLoop {
    animation: vertical-infinity-loop 10s linear infinite;
  }

  .slideDownLoop {
    animation: vertical-infinity-loop--reverse 10s linear infinite;
  }

  .masking-tape {
    width: 100%;
    height: 200%;
  }

  .slider-outer {
    position: absolute;
    width: clamp(3.125rem, -0.568rem + 9.09vw, 6.25rem);
    height: 200%;
  }

  .slider-outer--1 {
    left: clamp(-14.75rem, -23.407rem + 19.61vw, -6.25rem);
    top: -50%;
    transform: rotateZ(45deg);
  }

  .slider-outer--2 {
    left: clamp(-14.75rem, -23.407rem + 19.61vw, -6.25rem);
    bottom: -50%;
    transform: rotateZ(135deg);
  }

  .slider-outer--3 {
    right: clamp(-14.75rem, -23.407rem + 19.61vw, -6.25rem);
    top: -50%;
    transform: rotateZ(135deg);
  }

  .slider-outer--4 {
    right: clamp(-14.75rem, -23.407rem + 19.61vw, -6.25rem);
    bottom: -50%;
    transform: rotateZ(45deg);
  }



  .slider-left1 {
    background-color: #7bdeb4;
    background-image: radial-gradient(#ffffff 30%, transparent 30%), radial-gradient(#ffffff 30%, transparent 30%);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  }

  .slider-left2 {
    left: 0;
    background: repeating-linear-gradient(45deg, #ffd3fd, #ffd3fd 40px, #fff 40px, #fff 80px);
    background-position: 0 0, 10px 10px;
  }

  .slider-right1 {
    right: 0;
    background-color: #fff;
    background-image: linear-gradient(-90deg, #4cb7f0a3 60%, transparent 40%), linear-gradient(#edbce7 50%, transparent 50%);
    background-size: 15px 20px;
  }

  .slider-right2 {
    right: 0;
    background-color: #fff;
    background-image: radial-gradient(#ff9797 76%, transparent 76%);
    background-size: 15px 20px;
  }

  .sec-lead {
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #fdfaeb;
  }

  .lead-image{
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
  }

</style>
