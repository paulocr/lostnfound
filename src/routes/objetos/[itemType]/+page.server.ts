import prisma from '$lib/prisma';
import { claimSchema } from '$lib/schemas/claimSchema.js';
import { itemType, status } from '@prisma/client';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async ({ params, locals, parent }) => {
	type FilterKeys = 'perdidos' | 'reportados';

	const form = await superValidate(zod(claimSchema));

	if (params.itemType === 'perdidos' || params.itemType === 'reportados') {
		const itemType_es: FilterKeys = params.itemType;

		const filter: Record<FilterKeys, string> = {
			perdidos: 'looking',
			reportados: 'reported'
		};

		const { items } = await parent();

		const filteredItems = items.filter((item) => {
			return item.itemType === filter[itemType_es];
		});

		// filter items based on this

		// const items = await prisma.item.findMany({
		// 	include: { images: true, category: true },
		// 	where: {
		// 		itemType: itemType_es === 'perdidos' ? itemType.looking : itemType.reported
		// 	},
		// 	orderBy: {
		// 		created_at: 'desc'
		// 	}
		// });

		const tagsCount = await prisma.item.groupBy({
			by: ['categoryId'],
			_count: {
				_all: true
			},
			where: {
				itemType: itemType_es === 'perdidos' ? itemType.looking : itemType.reported
			}
		});

		const categoriesCount = await Promise.all(
			tagsCount.map(async (tag) => {
				const category = await prisma.category.findUnique({
					where: {
						id: tag.categoryId
					}
				});
				return {
					categoryName: category?.name,
					count: tag._count._all
				};
			})
		);

		return { form, categoriesCount, filteredItems };
	}
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(claimSchema));

		const itemId = form.data.itemId;

		const claimer = await prisma.person.create({
			data: {
				name: form.data.name,
				class: form.data.class,
				phone: form.data.phone
			}
		});

		await prisma.item.update({
			where: {
				id: itemId
			},
			data: {
				status: status.in_progress,
				claimedById: claimer.id
			}
		});

		return { form };
	}
};
