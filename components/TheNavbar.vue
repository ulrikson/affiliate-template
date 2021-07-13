<template>
    <nav class="py-4 bg-blue-nav text-white shadow-lg">
        <ul class='hidden md:flex justify-between w-4/5 mx-auto'>
            <li><NuxtLink to="/">Logotyp</NuxtLink></li>
            <li>
                <NuxtLink to="/blog" class="mx-4">Kategorier</NuxtLink>
                <NuxtLink to="/blog" class="mx-4">Blogg</NuxtLink>
                <NuxtLink to="/about" class="mx-4">Om</NuxtLink>
            </li>
        </ul>

        <ul class='md:hidden px-4 flex justify-between items-center'>
            <li><NuxtLink to="/">Logotyp</NuxtLink></li>
            <li><fa icon="bars" /></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>