<template>
	<div class="rounded-md py-4 px-8 bg-gray-800">
		<div class="flex justify-center">
			<a href="javascript:void(0);" class="mx-1 px-2 py-1 bg-indigo-600 rounded-md" @click.prevent="simulate">Random</a>
			<a href="javascript:void(0);" class="mx-1 px-2 py-1 bg-indigo-600 rounded-md">Epsilon-Greedy</a>
		</div>
		<div>
			<div v-for="(variant,i) in variants" :key="i" class="flex justify-between items-center">
				<div class="mt-4">
					<p>Variant {{variant.title}}</p>
					<p>{{variant.probability}}%</p>
				</div>
				<p class="text-xl text-green-300">{{test}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			variants: [
				{
					title: "A",
					probability: 15
				},
								{
					title: "B",
					probability: 10
				},
								{
					title: "C",
					probability: 5
				}
			],
			totalSimulation: 50,
			test: 0
		};
	},

	methods: {
		simulate() {
			for (let index = 0; index < 10; index++) {
				this.random(index);
			}
		},

		random(i) {
			setTimeout(function() {
				this.test += i;
			}, 200 * i);
		}
	}
};
</script>
