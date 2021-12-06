<template>
	<div class="sort-table">
		<h2 class="sort-table__title"> {{ title }}</h2>
		<table>
			<thead>
				<tr>
					<td>Type</td>
					<td>Last maintained</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	const flowerData = `[{
  "type": "Slender Yellow Woodsorrel",
  "date": "19/06/2021"
}, {
  "type": "Muskroot",
  "date": "06/06/2021"
}, {
  "type": "Script Lichen",
  "date": "17/08/2022"
}, {
  "type": "Proliferating Bulrush",
  "date": "07/08/2021"
}, {
  "type": "Shrubby Yellowcrest",
  "date": "11/12/2021"
}, {
  "type": "San Diego Bur Ragweed",
  "date": "08/10/2021"
}, {
  "type": "Cuero De Sapo",
  "date": "14/04/2022"
}, {
  "type": "Castle Lake Bedstraw",
  "date": "21/05/2021"
}, {
  "type": "Splendid Feather Moss",
  "date": "21/01/2022"
}, {
  "type": "Bolander's Onion",
  "date": "19/07/2022"
}]`;

	export default {
		data() {
			return {
				title: 'all the flowers in the garden',
				content: JSON.parse(flowerData),
			}
		},
	}
</script>

<style>
	.sort-table {
		background: #FFEEB0;
		height: 100%;
		width: 100%;
		display: flex;
    	flex-direction: column;
    	align-items: center;
	}

	.sort-table__title {
    	font-size: 1.1em;
    	font-family: var(--main-font);
	}

	.table {
		background-color: white;
		height: 70%;
		width: 80%;
	}
</style>