<template>
    <div class="mx-auto px-4 my-4">
        <h1 class="text-4xl text-center mb-4">Affiliate</h1>
        <p class="mb-4">Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius perferendis. Sequi qui asperiores aliquam ut.</p>
        <category-card 
            v-for="(category,i) in categories" 
            :key="i"
            :name="category.name"
            :link="category.link"
        />
    </div>
</template>

<script>

import CategoryCard from '../components/CategoryCard.vue'

export default {
    data() {
        return {
            categories: [
                {name: 'category 1', link: '/category1'},
                {name: 'category 2', link: '/category1'},
                {name: 'category 3', link: '/category1'}
            ]
        }
    }
}

</script>
