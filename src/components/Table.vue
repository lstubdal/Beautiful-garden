<template>
	<div class="sort-table">
		<h2 class="sort-table__title">{{ title }}</h2>
		<table>
			<thead>
				<tr>
					<td>
						<button @click="sortBy('type')" class="sort-table__button" aria-label="sort by type button"> Flower 
							<img src="../../public/img/arrowTable.svg" alt="sort arrows">
						</button>
					</td>  						
					<td>
						<button @click="sortBy('date')" class="sort-table__button" aria-label="sort by date button"> Last maintained 
							<img src="../../public/img/arrowTable.svg" alt="sort arrows">
						</button>
					</td>
				</tr>
			</thead>

			<tbody>
				<!-- looping data in array -->
				<tr v-for="row in naturalSort">
					<td v-for="value in row">{{ value }}</td>	
				</tr>
			</tbody>
		</table>

		<!-- push button toggles between ascending (smallest to largest/a - b - c) and descending order (opposite) -->
		<button @click="toggleSortOrder">Sorting after: {{ sort.key }} ({{ sort.order.toUpperCase() }})</button> 
	</div>
</template>

<script>
	const flowerData = `[{ "type": "Cuming's Lovegrass", "date": "06/08/2021" }, { "type": "Theobroma", "date": "10/08/2021" }, { "type": "Dotted Lichen", "date": "08/08/2021" }, { "type": "Celandine", "date": "19/08/2021" }, { "type": "Pineland Lobelia", "date": "07/08/2021" }, { "type": "Stebbins' Desertparsley", "date": "02/08/2021" }, { "type": "Cascade False Hellebore", "date": "04/08/2021" }, { "type": "Fritz's Zeuxine", "date": "13/08/2021" }, { "type": "Monardella", "date": "23/08/2021" }, { "type": "Everglades Buttonweed", "date": "24/08/2021" }] `;
	
	export default {
		data() {
			return {
				title: "all the flowers in the garden",
				sort: {
					key: 'type',
					order: 'asc',
				},
				content: JSON.parse(flowerData),
			};
		},

		// lifecycle hook - created() is a function
		created() {
			const query = this.$route.query;

			if (query.sort) {
				this.sort.key = query.sort;
			}

			if (query.order) {
				this.sort.order = query.order;
			}
		},

		computed: {
			alphabeticalSort() {
				const key = this.sort.key;
				const orderValue = this.sort.order === 'asc' ? 1 : -1;

				/* compare values */
				function compareFunction(a, b) {
					if (a[key] > b[key]) {
						return 1;
					} else if (a[key] < b[key]) {
						return -1;
					} else {
						return 0
					}
				}

				return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
			},

			naturalSort() {
				const key = this.sort.key;
				const orderValue = this.sort.order === 'asc' ? 1 : -1;

				function compareFunction(a, b) {
					a = a[key].toString();
					b = b[key].toString();

					return a.localeCompare(b, undefined, { numeric: true });
				}

				return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
			},
		},

		methods: {
			sortBy(key) {
				this.sort.key = key;
				this.$router.push({ query: { ...this.$route.query, sort: this.sort.key } })
			},

			toggleSortOrder() {
				this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc';
				this.$router.push({ query: { ...this.$route.query, order: this.sort.order } })
			},
		},
	};
</script>

<style>
	.sort-table {
		background: #FFEEB0;
		height: 100%;
		width: 100%;
		display: flex;
    	flex-direction: column;
		justify-content: space-evenly;
    	align-items: center;
	}

	.sort-table__title {
    	font-size: 1.1em;
    	font-family: var(--main-font);
		padding-top: 1em;
		padding-bottom: 0.5em;
		font-weight: bold;
	}

	table {
		position: relative;
		width: 80%;
		border-radius: 10px;
		padding: 0.5em;
		background: white;
		text-align: center;
		border-collapse: collapse;
		overflow: scroll;
	}

	button {
		background: none;
		border-style: none;
		font-size: 1em;
		font-weight: bold;
		margin: 0.5em;
		cursor: pointer;
	}
</style>


// toggle button til asc/desc
//https://css-tricks.com/complete-guide-table-element/