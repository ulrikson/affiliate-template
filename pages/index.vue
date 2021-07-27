<template>
    <div class="mx-auto px-4 my-4">
        <h1 class="mb-4">Affiliatesite.com</h1>
        <div class="md:flex">
            <div class="md:w-2/3">
                <p class="mb-4 md:pr-8">
                    Animi asperiores ducimus in et ullam facilis nobis
                    quibusdam. Nobis labore odio aut officiis adipisci.
                    Similique laboriosam laboriosam qui. Eum quo libero
                    voluptatem sed consequatur eius perferendis. Sequi qui
                    asperiores aliquam ut.
                </p>
                <ul>
                    <li v-for="article of articles" :key="article.slug">
                        <NuxtLink
                            :to="{
                                name: 'blog-slug',
                                params: { slug: article.slug }
                            }"
                        >
                            <img :src="require(`~/assets/images/${article.img}`)" class="preview" />
                            <div>
                                <h2>{{ article.title }}</h2>
                                <p>{{ article.description }}</p>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="md:w-1/3 bg-gray-bg rounded-md p-4 md:px-8">
                <h2>Popular products</h2>
                <!-- v-for product in popular products json... -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content("articles")
            .only(["title", "description", "img", "slug"])
            .sortBy("createdAt", "asc")
            .fetch();

        return {
            articles
        };
    }
};
</script>
