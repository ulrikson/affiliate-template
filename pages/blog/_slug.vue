<template>
    <article>
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <img
            :src="require(`~/assets/images/${article.img}`)"
            :alt="article.alt"
        />
        <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

        <nav class="my-8">
            <ul>
                <li v-for="link of article.toc" :key="link.id">
                    <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                </li>
            </ul>
        </nav>

        <nuxt-content :document="article" class="my-8" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content("articles", params.slug).fetch();

        return { article };
    },

    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        }
    }
};
</script>
