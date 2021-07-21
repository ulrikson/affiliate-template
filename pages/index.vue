<template>
    <div class="mx-auto px-4 my-4">
        <h1 class="text-center mb-4">Affiliate</h1>
        <img src="~/assets/landing.png" class="w-3/4 md:w-1/2 mx-auto"/>
        <p class="mb-4">Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius perferendis. Sequi qui asperiores aliquam ut.</p>
        <div class="flex justify-center my-2">
            <nuxt-link to="/" class="cta">Call to Action</nuxt-link>
        </div>
        <category-card 
            v-for="(category,i) in categories.categories" 
            :key="i"
            :name="category.name"
            :link="'categories/'+category.slug"
            :icon="category.icon"
        />
        <p class="mb-4">Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius perferendis. Sequi qui asperiores aliquam ut.</p>
    </div>
</template>

<script>

import CategoryCard from '../components/CategoryCard.vue'

export default {
    async asyncData({ $content }) {
        const categories = await $content("categories").fetch();
        return { categories };
    }
}

</script>
