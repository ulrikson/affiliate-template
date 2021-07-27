<template>
	<div class="mx-auto px-4 my-4">
		<h1 class="mb-4">Affiliatesite.com</h1>
		<div class="md:flex">
			<div class="md:w-2/3 md:pr-8">
				<p class="mb-4">
					Animi asperiores ducimus in et ullam facilis nobis quibusdam. Nobis labore odio aut officiis
					adipisci. Similique laboriosam laboriosam qui. Eum quo libero voluptatem sed consequatur eius
					perferendis. Sequi qui asperiores aliquam ut.
				</p>

				<div class="md:flex flex-wrap my-8">
					<div
						v-for="(article, i) in articles"
						:key="article.slug"
						:class="[i === 0 ? 'md:w-full' : 'md:w-1/3', 'md:pr-4 my-4']"
					>
						<nuxt-link
							:to="{ name: 'blog-slug', params: { slug: article.slug } }"
							:class="{ 'md:flex justify-between': i === 0 }"
						>
							<img
								:src="require(`~/assets/images/${article.img}`)"
								:class="[{ 'md:w-1/2 md:h-60': i === 0 }, 'object-cover rounded-md']"
							/>
							<div :class="{ 'md:w-1/2 md:pl-4': i === 0 }">
								<p class="text-gray-600">{{ formatDate(article.updatedAt) }}</p>
								<h2 class="my-2">{{ article.title }}</h2>
								<p>{{ article.description }}</p>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
			<div class="md:w-1/3 bg-gray-bg rounded-md p-4 md:px-8">
				<h2>Popular products</h2>
				<!-- v-for product in popular products json... -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const articles = await $content("articles")
			.only(["title", "description", "img", "slug", "updatedAt"])
			.sortBy("createdAt", "asc")
			.fetch();

		return {
			articles,
		};
	},

	methods: {
		formatDate(date) {
			const options = { year: "numeric", month: "long", day: "numeric" };
			return new Date(date).toLocaleDateString("en", options);
		},
	},
};
</script>
