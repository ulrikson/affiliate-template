<template>
    <div class="mx-auto px-4 my-4">
        <h1 class="mb-4">Affiliatesida</h1>
        <div class="md:flex">
            <div class="md:w-2/3">
                <p class="mb-4">
                    Animi asperiores ducimus in et ullam facilis nobis
                    quibusdam. Nobis labore odio aut officiis adipisci.
                    Similique laboriosam laboriosam qui. Eum quo libero
                    voluptatem sed consequatur eius perferendis. Sequi qui
                    asperiores aliquam ut.
                </p>
                <nuxt-link
                    v-for="article in articles"
                    :key="article.slug"
                    :to="'blog/' + article.slug"
                >
                    <div class="p-4 my-4">
                        <h2>{{ article.title }}</h2>
                        <p>{{ article.description }}</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="md:w-1/3 bg-gray-bg">
                Products
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
