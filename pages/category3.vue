<template>
    <div class="mx-auto px-4 my-4">
        <h1 class="text-center">Category 3</h1>
        <img src="~/assets/category3.png" class="w-3/4 md:w-1/2 mx-auto"/>
        <p class="mb-4">Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius perferendis. Sequi qui asperiores aliquam ut.</p>
        <product-card 
            v-for="(product,i) in products" 
            :key=i
            :name="product.name"
            :link="product.link"
            :description="product.description"
            :image="product.image"
        />
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
    components: { ProductCard },
    data () {
        return {
            products: [
                {
                    name: 'Product 1', 
                    link: 'https://bing.com',
                    description: 'Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius perferendis. Sequi qui asperiores aliquam ut.',
                    image: 'category1.png'   
                },
                {
                    name: 'Product 2', 
                    link: 'https://google.com',
                    description: 'Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius perferendis. Sequi qui asperiores aliquam ut.',
                    image: 'category2.png'   
                },
                {
                    name: 'Product 3', 
                    link: 'https://yahoo.com',
                    description: 'Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius perferendis. Sequi qui asperiores aliquam ut.',
                    image: 'category3.png'   
                }
            ]
        }
    }
}
</script>