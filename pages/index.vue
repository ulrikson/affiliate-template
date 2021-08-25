<template>
	<div class="mx-auto px-4 my-4">
		<h1 class="mb-4">WebDevAI</h1>
		<div class="md:flex">
			<div class="md:pr-8">
				<p class="mb-4 text-center">
					Machine learning from a web development perspective.
				</p>

				<div class="md:flex flex-wrap my-8">
					<div
						v-for="(article) in articles"
						:key="article.slug"
						class="md:px-4 py-2 my-4 rounded-md"
					>
						<nuxt-link
							:to="{ name: 'blog-slug', params: { slug: article.slug } }"
							class="md:flex justify-between"
						>
							<nuxt-img
								:src="'/images/' + article.img"
								sizes="md:600px sm:300px"
								class="md:w-1/2 md:h-60 object-cover rounded-md"
							/>
							<div class="md:w-1/2 md:pl-4">
								<p class="text-gray-400">{{ formatDate(article.updatedAt) }}</p>
								<h2 class="my-2 border-b-2 border-indigo-600">{{ article.title }}</h2>
								<p>{{ article.description }}</p>
							</div>
						</nuxt-link>
					</div>
				</div>

				<div class="flex justify-center mb-4 md:mb-0">
					<nuxt-link :to="'/blog'">
						See all posts <span><fa icon="chevron-right"/></span>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	async asyncData({ $content, params }) {
		const articles = await $content('articles')
			.only(['title', 'description', 'img', 'slug', 'updatedAt'])
			.sortBy('createdAt', 'asc')
			.limit(5)
			.fetch();

		return {
			articles,
		};
	},

	data() {
		return {
			
		};
	},

	head() {
		return {
			title: 'HOMEPAGE TITLE',
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
