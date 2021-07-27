<template>
    <nav class="py-4">
        <ul class="flex justify-between items-center px-8 md:px-16">
            <li class="w-1/2 md:w-2/3">
                <nuxt-link to="/">
                    <img src="~/assets/logo.webp" class="logo" />
                </nuxt-link>
            </li>
            <li class="w-1/2 md:w-1/3">
                <AppSearchInput />
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

};
</script>
