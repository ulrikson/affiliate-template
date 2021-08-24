<template>
	<article>
		<h1 class="border-b-2 border-indigo-600">{{ article.title }}</h1>
		<p class="text-center text-gray-500">Last updated: {{ formatDate(article.updatedAt) }}</p>
		<div>
			<nuxt-img
				:src="'/images/' + article.img"
				sizes="sm:300px md:800px"
				:alt="article.alt"
				class="md:h-96 mt-4 rounded-md object-cover w-full"
			/>
			<p class="text-center text-gray-500 text-xs">
				Photo by
				<a :href="article.credits.url" target="blank_" rel="no-follow" class="underline">{{
					article.credits.creator
				}}</a>
				on
				{{ article.credits.origin }}
			</p>

			<p class="mt-4">{{ article.description }}</p>

			<nuxt-content :document="article" class="my-8" />
		</div>
	</article>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('articles', params.slug)
			.sortBy('createdAt', 'asc')
			.fetch();

		return {
			article,
		};
	},

	head() {
		return {
			title: this.article.title + ' - NAME OF SITE',
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
