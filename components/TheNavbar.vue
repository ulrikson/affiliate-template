<template>
    <nav class="py-4">
        <ul class="md:flex justify-between px-8 md:px-16">
            <li>
                <nuxt-link to="/">
                    <img src="~/assets/logo.webp" class="logo" />
                </nuxt-link>
            </li>
            <li>
                <AppSearchInput />
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

};
</script>
