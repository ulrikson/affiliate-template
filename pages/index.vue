<template>
    <div class="mx-auto px-4 my-4">
        <h1 class="text-4xl text-center mb-4">Affiliate</h1>
        <p class="mb-4">Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius perferendis. Sequi qui asperiores aliquam ut.</p>
        <div class="flex justify-center my-2">
            <NuxtLink to="/" class="bg-green-400 shadow-sm hover:shadow-md text-white rounded-md py-2 px-4">Call to Action</NuxtLink>
        </div>
        <category-card 
            v-for="(category,i) in categories" 
            :key="i"
            :name="category.name"
            :link="category.link"
            :icon="category.icon"
        />
    </div>
</template>

<script>

import CategoryCard from '../components/CategoryCard.vue'

export default {
    data() {
        return {
            categories: [
                {name: 'category 1', link: '/category1', icon: 'layer-group'},
                {name: 'category 2', link: '/category1', icon: 'language'},
                {name: 'category 3', link: '/category1', icon: 'pencil-ruler'}
            ]
        }
    }
}

</script>
