<script lang="ts">
	import type { Prisma, item } from '@prisma/client';

	export let data;

	$: ({ items } = data);

	type ItemWithCategory = Prisma.itemGetPayload<{
		include: { category: true };
	}>;

	type Counts = Record<string, number>;

	const countAndSortByCategoryName = (items: ItemWithCategory[]) => {
		const counts = items.reduce((acc: Counts, item: ItemWithCategory) => {
			const categoryName = item.category.name;
			acc[categoryName] = (acc[categoryName] || 0) + 1;
			return acc;
		}, {});

		const sortedCounts: Counts = Object.entries(counts)
			.sort(([, a], [, b]) => b - a)
			.reduce((acc: Counts, [key, value]) => {
				acc[key] = value;
				return acc;
			}, {});

		return sortedCounts;
	};

	let categoryCounts: any = {};
	$: if (items) {
		categoryCounts = countAndSortByCategoryName(items);
	}
</script>

<div class="flex justify-center">
	<h1 class="h1 text-center">Categorías con mayores reportes</h1>
</div>

<div class="flex w-1/2 mx-auto px-2 my-4">
	<table class="table table-comfortable">
		<thead>
			<th>Categoría</th>
			<th>Conteo</th>
		</thead>
		<tbody>
			{#each Object.entries(categoryCounts) as category}
				<tr>
					<td>{category[0]}</td>
					<td>{category[1]}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.table-comfortable tbody td {
		padding: 15px;
	}
</style>
