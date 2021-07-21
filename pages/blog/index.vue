<template>
    <div class="mx-auto px-4 my-4">
        <h1 class="text-center mb-4">Blog</h1>
        <nuxt-link 
            v-for="article in articles" 
            :key="article.slug" 
            :to="'blog/'+article.slug"
        >
            <div class="rounded-md bg-white p-4 my-4 shadow-sm hover:shadow-md">
                <h2>{{article.title}}</h2>
                <p>{{ article.description }}</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const articles = await $content("articles")
            .sortBy("createdAt", "desc")
            .fetch();
        return { articles };
    }
};
</script>
