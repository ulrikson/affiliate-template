<template>
	<div class="mx-auto px-4 my-4">
		<h1 class="mb-4">mysite.com</h1>
		<div class="md:flex">
			<div class="md:pr-8">
				<p class="mb-4">
					Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis
					adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius
					perferendis. Sequi qui asperiores aliquam ut.
				</p>

				<div class="md:flex flex-wrap my-8">
					<div
						v-for="(article, i) in articles"
						:key="article.slug"
						:class="[i === 0 ? 'md:w-full' : 'md:w-1/3', 'md:px-4 md:py-2 my-4 rounded-md']"
					>
						<nuxt-link
							:to="{ name: 'blog-slug', params: { slug: article.slug } }"
							:class="{ 'md:flex justify-between': i === 0 }"
						>
							<nuxt-img
								:src="'/images/' + article.img"
								:sizes="i === 0 ? 'md:600px sm:300px' : 'md:400px sm:300px'"
								:class="[{ 'md:w-1/2 md:h-60': i === 0 }, 'object-cover rounded-md']"
							/>
							<div :class="{ 'md:w-1/2 md:pl-4': i === 0 }">
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
			.limit(4)
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
