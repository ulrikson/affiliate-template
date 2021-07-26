<template>
    <article>
        <nuxt-content 
            :document="article"
            class="bg-white p-8 md:px-16 my-4 mx-2 rounded-md"
        />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content("articles", params.slug).fetch();

        return { article };
    }
};
</script>
