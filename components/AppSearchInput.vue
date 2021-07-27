<template>
	<div class="w-full border-2 border-gray-bg border-solid rounded-md p-1">
		<input v-model="searchQuery" type="search" autocomplete="off" placeholder="Search" class="w-full" />
		<ul v-if="articles.length" class="absolute left-0 md:left-auto p-4 mx-4 md:mx-0 shadow-md rounded-md bg-white">
			<li v-for="article of articles" :key="article.slug">
				<NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
					{{ article.title }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchQuery: "",
			articles: [],
		};
	},

	watch: {
		async searchQuery(searchQuery) {
			if (!searchQuery) {
				this.articles = [];
				return;
			}
			this.articles = await this.$content("articles")
				.limit(5)
				.search(searchQuery)
				.fetch();
		},
	},
};
</script>
