<template>
    <div class="page-item">
        <Header/>
        <div class="container container--page">
            <div class="page-contents">
                <h2 class="page-title">{{ post.title }}</h2>
                <time
                    class="page-date"
                    :datetime="post.publishedAt"
                    v-text="$dateFns.format(new Date(post.publishedAt), 'yyyy.MM.dd')"
                />
                <figure class="post-thumbnail">
                    <img :src="post.thumbnail.url" alt="" width="800" height="600">
                </figure>
                <div v-html="post.textarea">
                </div>
            </div>

        </div>
        <div class="container">
            <div class="archive-nav-link">
                <router-link to="/blogs" class="nav-link-button">ブログ一覧へ</router-link>
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
        endpoint: `news/${params.id}`
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
    background: repeating-linear-gradient(-45deg, rgba(139,198,202,.3), rgba(139,198,202,.3) 10px, #fff 0, #fff 20px);
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