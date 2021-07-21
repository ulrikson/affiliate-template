<template>
    <div class="rounded-md bg-white p-4 my-4 shadow-sm hover:shadow-md">
        <nuxt-link :to="link" class="flex justify-between items-center">
            <span>
                <fa class="text-indigo-600 mr-2" :icon="icon" />
                {{name}}
            </span>
            <fa icon="chevron-right" />
        </nuxt-link>
    </div>
</template>

<script>

export default {
    props: ['name', 'link', 'icon']
}

</script>