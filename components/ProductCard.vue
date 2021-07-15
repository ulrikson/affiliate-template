<template>
    <div class="rounded-md bg-white p-4 my-4 shadow-sm hover:shadow-md">
        <div class="flex justify-between items-center mb-4">
            <h2>{{name}}</h2>
            <a :href="link" target="_blank" class="cta">Call to Action <fa icon="chevron-right"/></a>
        </div>
        <div class="flex">
            <img :src="getImgUrl(image)" class="object-cover w-full"/>
            <p class="px-4">{{description}}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: ['name', 'image', 'description', 'link'],

    methods: {
        getImgUrl(image) {
            return require('~/assets/'+image)
        }
    }
}

</script>