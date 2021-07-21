<template>
    <h1>{{ this.title }}</h1>
</template>

<script>
export default {
    async asyncData({ params }) {
        const title = params.title;
        return { title };
    }
};
</script>
