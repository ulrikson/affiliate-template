<template>
    <div class="rounded-md bg-white p-4 my-2 shadow-sm">
        <NuxtLink :to="link" class="flex justify-between items-center">
            {{name}}
            <fa icon="chevron-right" />
        </NuxtLink>
    </div>
</template>

<script>

export default {
    props: ['name', 'link']
}

</script>