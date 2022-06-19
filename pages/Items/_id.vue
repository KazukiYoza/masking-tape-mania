<template>
    <div class="page-item">
        <Header/>
        <!-- <p>{{ post }}</p> -->
        <div class="container container--page">
           <div class="page-contents">
                <h2 class="page-title">{{ post.title }}</h2>
                <!-- <time
                    :datetime="post.postDate"
                    v-text="$dateFns.format(new Date(post.postDate), 'yyyy.MM.dd')"
                /> -->
                <figure class="post-thumbnail">
                    <img :src="post.thumbnail.url" alt="" width="800" height="600">
                </figure>
                <div v-html="post.textarea">
                </div>
           </div>
        </div>
        <div class="container">
            <div class="archive-nav-link">
                <router-link to="/items" class="nav-link-button">マステ一覧へ</router-link>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message: '/users/_id.vueを表示中',
        }
    },
    async asyncData({ $microcms, params }) {
        const data = await $microcms.get({
        endpoint: `maste/${params.id}`
        });
        return {
            post: data
        }
    }
}
</script>

<style scoped>
.page-item {
    position: relative;
    background-color: #FFD24C;
    background-image: radial-gradient(#FCC800 30%, transparent 30%), radial-gradient(#FCC800 30%, transparent 30%);
    background-size: 70px 70px;
    background-position: 0px 0, 35px 35px;
    position: relative;
    color: #65513f;
    /* padding-top: 100px; */
}
.post-thumbnail {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    width: min(90%,700px);
}
.post-thumbnail img {
    width: 100%;
    height: auto;
}

@media screen and (min-width: 650px) {
    .page-item{
        padding-top: 0;
    }
}

</style>