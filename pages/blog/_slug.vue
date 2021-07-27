<template>
    <article>
        <h1>{{ article.title }}</h1>
        <div class="md:w-2/3 mx-auto">
            <img
                :src="require(`~/assets/images/${article.img}`)"
                :alt="article.alt"
                class="md:h-96 my-4 rounded-md object-cover w-full"
            />

            <p>{{ article.description }}</p>

            <nav class="my-8">
                <ul>
                    <li v-for="link of article.toc" :key="link.id">
                        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                    </li>
                </ul>
            </nav>

            <nuxt-content :document="article" class="my-8" />
        </div>

        <prev-next :prev="prev" :next="next" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content("articles", params.slug).fetch();

        return { article };
    },

    async asyncData({ $content, params }) {
        const article = await $content("articles", params.slug).fetch();

        const [prev, next] = await $content("articles")
            .only(["title", "slug"])
            .sortBy("createdAt", "asc")
            .surround(params.slug)
            .fetch();

        return {
            article,
            prev,
            next
        };
    },

    methods: {}
};
</script>
