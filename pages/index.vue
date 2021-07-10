<template>
    <div class="container mx-auto px-4 my-4">
        <p class="mb-4">Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius perferendis. Sequi qui asperiores aliquam ut.</p>
        <category-card 
            v-for="category in categories" 
            :key="category"
        />
    </div>
</template>

<script>

import CategoryCard from '../components/CategoryCard.vue'

export default {
    data() {
        return {
            categories: [1,2,3,4,5]
        }
    }
}

</script>
