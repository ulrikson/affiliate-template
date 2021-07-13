<template>
    <nav class="py-4 bg-blue-nav text-white shadow-lg rounded-b-sm">
        <ul class='hidden md:flex justify-between w-4/5 mx-auto'>
            <li><NuxtLink to="/">Logotype</NuxtLink></li>
            <li>
                <NuxtLink v-for="(nav,i) in navLinks" :key=i :to="nav.link" class="mx-4">{{nav.name}}</NuxtLink>
            </li>
        </ul>

        <ul class='md:hidden px-4 flex justify-between items-center'>
            <li><NuxtLink to="/">Logotype</NuxtLink></li>
            <li>
                <a href="javascript:void(0);" @click.prevent="toggleBurger"><fa icon="bars" /></a>
                <div v-show="showBurger" class="burger">
                    <ul>
                        <li class="my-2" v-for="(nav,i) in navLinks" :key=i @click.prevent="toggleBurger">
                            <NuxtLink :to="nav.link" class="flex justify-between">
                                {{nav.name}}
                                <fa icon="chevron-right" />
                            </NuxtLink>
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
                {name: 'Categories', link: '/blog'},
                {name: 'Blog', link: '/blog'},
                {name: 'About', link: '/about'}
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

<style scoped>
    .burger {
        position: absolute;
        right: 5%;
        background: white;
        color: black;
        padding: 1rem;
        width: 90%;
        border-radius: 0.375rem;
    }
</style>