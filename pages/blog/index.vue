<template>
	<div class="mx-auto px-4 my-4">
		<h1 class="mb-4">Posts</h1>
		<nuxt-link :to="'blog/' + article.slug" v-for="article in articles" :key="article.key">
			<div class="p-4 rounded-md my-4 md:w-1/2 mx-auto">
				<h2 class="hover:text-gray-500">{{ article.title }}</h2>
				<p class="text-gray-600">{{ formatDate(article.updatedAt) }}</p>
			</div>
		</nuxt-link>
	</div>
</template>

<script>

export default {
	async asyncData({ $content, params }) {
		const articles = await $content('articles')
			.only(['title', 'description', 'img', 'slug', 'updatedAt'])
			.sortBy('createdAt', 'asc')
			.fetch();

		return {
			articles,
		};
	},

	head() {
		return {
			title: 'BLOG PAGE TITLE',
			meta: [{ hid: 'description', name: 'description', content: 'INSERT CONTENT' }],
		};
	},

	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' };
			return new Date(date).toLocaleDateString('en', options);
		},
	},
};
</script>
