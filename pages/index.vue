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

				<div class="my-4">
					<nuxt-link
						:to="{ name: 'blog-slug', params: { slug: articles[0].slug } }"
						class="md:flex justify-between"
					>
						<img
							:src="require(`~/assets/images/${articles[0].img}`)"
							class="md:w-1/2 h-60 object-cover rounded-md"
						/>
						<div class="md:w-1/2 md:pl-4">
							<p>{{ formatDate(articles[0].updatedAt) }}</p>
							<h2 class="my-4">{{ articles[0].title }}</h2>
							<p>{{ articles[0].description }}</p>
						</div>
					</nuxt-link>
				</div>

				<div class="md:flex flex-wrap">
					<div v-for="article in articles.slice(1)" :key="article.slug" class="md:w-1/3 pr-4 my-4">
						<nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
							<img :src="require(`~/assets/images/${article.img}`)" class="object-cover rounded-md" />
							<div class="">
								<p>{{ formatDate(article.updatedAt) }}</p>
								<h2 class="my-4">{{ article.title }}</h2>
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
