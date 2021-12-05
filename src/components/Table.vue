<template>
	<div class="sort-table">
		<h2 class="sort-table__title"> {{ title }}</h2>
		<table>
			<thead>
				<tr>
					<td>Type</td>
					<td>Maintained</td>
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
	export default{
		data() {
			return {
				title: 'all the flowers in the garden',
			}
		}
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
</style>
