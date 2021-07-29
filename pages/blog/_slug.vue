<template>
	<article>
		<h1>{{ article.title }}</h1>
		<p class="text-center text-gray-500">Last updated: {{ formatDate(article.updatedAt) }}</p>
		<div class="md:w-2/3 mx-auto">
			<img
				:src="require(`~/assets/images/${article.img}`)"
				:alt="article.alt"
				class="md:h-96 my-4 rounded-md object-cover w-full"
			/>
            <p>Photo credit: <a :href="article.credits" target="blank_" rel="nofollow">Unsplash</a></p>

			<p>{{ article.description }}</p>

			<nuxt-content :document="article" class="my-8" />
		</div>

		<prev-next :prev="prev" :next="next" />
	</article>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('articles', params.slug).fetch();

		const [prev, next] = await $content('articles')
			.only(['title', 'slug'])
			.sortBy('createdAt', 'asc')
			.surround(params.slug)
			.fetch();

		return {
			article,
			prev,
			next,
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
