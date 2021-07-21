<template>
    <nav class="py-4 bg-blue-nav text-white shadow-lg rounded-b-sm">
        <ul class='hidden md:flex justify-between w-2/3 mx-auto'>
            <li><nuxt-link to="/">Logotype</nuxt-link></li>
            <li>
                <nuxt-link 
                    v-for="(nav,i) in navLinks" 
                    :key=i 
                    :to="nav.link" 
                    class="mx-4 hover:text-gray-200"
                >
                    {{nav.name}}
                </nuxt-link>
            </li>
        </ul>

        <ul class='md:hidden px-4 flex justify-between items-center'>
            <li><nuxt-link to="/">Logotype</nuxt-link></li>
            <li>
                <a href="javascript:void(0);" @click.prevent="toggleBurger"><fa icon="bars" /></a>
                <div v-show="showBurger" class="burger">
                    <ul>
                        <li class="my-2 hover:text-gray-700" v-for="(nav,i) in navLinks" :key=i @click.prevent="toggleBurger">
                            <nuxt-link :to="nav.link" class="flex justify-between">
                                {{nav.name}}
                                <fa icon="chevron-right" />
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data () {
        return{
            showBurger: false,
            navLinks: [
                {name: 'Category 1', link: '/category1'},
                {name: 'Category 2', link: '/category2'},
                {name: 'Category 3', link: '/category3'},
                {name: 'Blog', link: '/blog'},
            ]
        }
    },

	mounted () {
		document.addEventListener('click', this.handleOutsideClick);
	},

	beforeDestroy () {
		document.removeEventListener('click', this.handleOutsideClick);
	},

    methods: {
        toggleBurger() {
            this.showBurger = !this.showBurger;
        },

		handleOutsideClick (event) {
			if (this.showBurger && !this.$el.contains(event.target)) {
				this.showBurger = false;
			}
		},
    }
}
</script>