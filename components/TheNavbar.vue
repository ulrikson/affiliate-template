<template>
    <nav class="py-4 bg-blue-nav text-white">
        <ul class='flex justify-between w-2/3 mx-auto'>
            <li><NuxtLink to="/">Logotyp</NuxtLink></li>
            <li>
                <NuxtLink to="/blog" class="mx-4">Kategorier</NuxtLink>
                <NuxtLink to="/blog" class="mx-4">Blogg</NuxtLink>
                <NuxtLink to="/about" class="mx-4">Om</NuxtLink>
            </li>
            <li><NuxtLink to="/" class="bg-green-400 rounded-md p-2">Call To Action</NuxtLink></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>