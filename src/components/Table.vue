<template>
	<div class="sort-table">
		<h2 class="sort-table__title">{{ title }}</h2>
		<table>
			<thead>
				<tr>
					<td>
						<button @click="sortBy('type')"> Flower <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.32999 9.79499C6.54092 10.0057 6.82686 10.124 7.12499 10.124C7.42311 10.124 7.70905 10.0057 7.91999 9.79499L12 5.71499L16.08 9.79499C16.183 9.90552 16.3072 9.99417 16.4452 10.0557C16.5832 10.1171 16.7321 10.1502 16.8832 10.1529C17.0343 10.1555 17.1843 10.1278 17.3244 10.0712C17.4645 10.0146 17.5917 9.93037 17.6985 9.82354C17.8054 9.71672 17.8896 9.58947 17.9462 9.44938C18.0028 9.3093 18.0305 9.15926 18.0279 9.0082C18.0252 8.85715 17.9921 8.70818 17.9307 8.57018C17.8692 8.43218 17.7805 8.30798 17.67 8.20499L12.795 3.32999C12.584 3.11931 12.2981 3.00098 12 3.00098C11.7019 3.00098 11.4159 3.11931 11.205 3.32999L6.32999 8.20499C6.11931 8.41592 6.00098 8.70186 6.00098 8.99999C6.00098 9.29811 6.11931 9.58405 6.32999 9.79499V9.79499ZM6.32999 14.205C6.54092 13.9943 6.82686 13.876 7.12499 13.876C7.42311 13.876 7.70905 13.9943 7.91999 14.205L12 18.285L16.08 14.205C16.183 14.0945 16.3072 14.0058 16.4452 13.9443C16.5832 13.8828 16.7321 13.8498 16.8832 13.8471C17.0343 13.8444 17.1843 13.8722 17.3244 13.9288C17.4645 13.9854 17.5917 14.0696 17.6985 14.1764C17.8054 14.2833 17.8896 14.4105 17.9462 14.5506C18.0028 14.6907 18.0305 14.8407 18.0279 14.9918C18.0252 15.1428 17.9921 15.2918 17.9307 15.4298C17.8692 15.5678 17.7805 15.692 17.67 15.795L12.795 20.67C12.584 20.8807 12.2981 20.999 12 20.999C11.7019 20.999 11.4159 20.8807 11.205 20.67L6.32999 15.795C6.11931 15.584 6.00098 15.2981 6.00098 15C6.00098 14.7019 6.11931 14.4159 6.32999 14.205V14.205Z" fill="black"/></svg>  
						</button>
					</td>  						
					<td>
						<button @click="sortBy('date')"> Last maintained <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.32999 9.79499C6.54092 10.0057 6.82686 10.124 7.12499 10.124C7.42311 10.124 7.70905 10.0057 7.91999 9.79499L12 5.71499L16.08 9.79499C16.183 9.90552 16.3072 9.99417 16.4452 10.0557C16.5832 10.1171 16.7321 10.1502 16.8832 10.1529C17.0343 10.1555 17.1843 10.1278 17.3244 10.0712C17.4645 10.0146 17.5917 9.93037 17.6985 9.82354C17.8054 9.71672 17.8896 9.58947 17.9462 9.44938C18.0028 9.3093 18.0305 9.15926 18.0279 9.0082C18.0252 8.85715 17.9921 8.70818 17.9307 8.57018C17.8692 8.43218 17.7805 8.30798 17.67 8.20499L12.795 3.32999C12.584 3.11931 12.2981 3.00098 12 3.00098C11.7019 3.00098 11.4159 3.11931 11.205 3.32999L6.32999 8.20499C6.11931 8.41592 6.00098 8.70186 6.00098 8.99999C6.00098 9.29811 6.11931 9.58405 6.32999 9.79499V9.79499ZM6.32999 14.205C6.54092 13.9943 6.82686 13.876 7.12499 13.876C7.42311 13.876 7.70905 13.9943 7.91999 14.205L12 18.285L16.08 14.205C16.183 14.0945 16.3072 14.0058 16.4452 13.9443C16.5832 13.8828 16.7321 13.8498 16.8832 13.8471C17.0343 13.8444 17.1843 13.8722 17.3244 13.9288C17.4645 13.9854 17.5917 14.0696 17.6985 14.1764C17.8054 14.2833 17.8896 14.4105 17.9462 14.5506C18.0028 14.6907 18.0305 14.8407 18.0279 14.9918C18.0252 15.1428 17.9921 15.2918 17.9307 15.4298C17.8692 15.5678 17.7805 15.692 17.67 15.795L12.795 20.67C12.584 20.8807 12.2981 20.999 12 20.999C11.7019 20.999 11.4159 20.8807 11.205 20.67L6.32999 15.795C6.11931 15.584 6.00098 15.2981 6.00098 15C6.00098 14.7019 6.11931 14.4159 6.32999 14.205V14.205Z" fill="black"/></svg>
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

		// computed: 
		computed: {
			alphabeticalSort() {
				const key = this.sort.key;
				const orderValue = this.sort.order === 'asc' ? 1 : -1;

		// hente frem for sammenligning
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
		/* overflow: scroll; */
		border-collapse: collapse;
		/* border-spacing: 0.5rem; */
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