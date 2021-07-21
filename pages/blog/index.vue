<template>
    <div class="mx-auto px-4 my-4">
        <h1 class="text-center mb-4">Blog</h1>
        <div
            v-for="article in articles"
            :key="article.slug"
            class="rounded-md bg-white p-4 my-4 shadow-sm hover:shadow-md"
        >
            <h2>
                <NuxtLink :to="'blog/'+article.slug">
                    {{ article.title }}
                </NuxtLink>
            </h2>
            <div>
                {{ article.description }}
            </div>
        </div>
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
