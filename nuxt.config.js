export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'affiliate-template',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'INSERT MAIN DESCRIPTION HERE' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/styles/index.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		[
			'nuxt-fontawesome',
			{
				component: 'fa', //customize component name
				imports: [
					{
						set: '@fortawesome/free-solid-svg-icons',
						icons: ['faHome', 'faChevronRight'],
					},
				],
			},
		],
		'@nuxt/image',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxt/content'],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
