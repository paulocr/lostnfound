import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { newItemSchema } from '$lib/schemas/newItemSchema';
import { message, superValidate } from 'sveltekit-superforms';
import prisma from '$lib/prisma';
import { imagekit } from '$lib/imagekit';
import { status } from '@prisma/client';

export const load = async ({}) => {
	// if (locals.session === null) {
	// 	console.log('no locals.user');
	// 	redirect(301, '/ingresar?newItemRedirect=true');
	// }

	const categories = await prisma.category.findMany({
		orderBy: {
			name: 'asc'
		}
	});

	const form = await superValidate(zod(newItemSchema));
	return { form, categories };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(newItemSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const newItem = await prisma.item.create({
			data: {
				description: form.data.description,
				location: form.data.location,
				foundOrLost_at: new Date(form.data.foundOrLost_at).toISOString(),
				category: {
					connect: {
						id: form.data.category
					}
				},
				left_at: form.data.left_at || null,
				status: status.new,
				itemType: form.data.itemType,
				reporter: {
					create: {
						name: form.data.name,
						class: form.data.class,
						phone: form.data.phone
					}
				}
			}
		});

		const uploadPromises = form.data.images.map(async (image) => {
			return new Promise(async (resolve, reject) => {
				imagekit.upload(
					{
						fileName: image.name,
						file: Buffer.from(await image.arrayBuffer())
					},
					async function (error, result) {
						if (error) {
							console.log(error);
							reject(error);
						} else {
							if (result) {
								await prisma.image.create({
									data: {
										itemId: newItem.id,
										url: result.url,
										altText: result.name
									}
								});
								resolve(true);
							}
						}
					}
				);
			});
		});

		try {
			await Promise.all(uploadPromises);
		} catch (error) {
			return fail(500, { message: 'Error uploading images' });
		}

		return message(form, 'Se registró el objeto con éxito!');
	}
};
