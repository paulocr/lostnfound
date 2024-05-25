import { zod } from 'sveltekit-superforms/adapters';
import { fail, redirect } from '@sveltejs/kit';
import { schema } from '$lib/schemas/newItemSchema';
import { message, superValidate } from 'sveltekit-superforms';
import prisma from '$lib/prisma';
import { imagekit } from '$lib/imagekit.js';

export const load = async ({ locals }) => {
	if (locals.session === null) {
		console.log('no locals.user');
		redirect(301, '/ingresar');
	}

	const form = await superValidate(zod(schema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const newItem = await prisma.item.create({
			data: {
				description: form.data.description,
				location: form.data.location,
				found: form.data.found,
				tags: form.data.tags
			}
		});

		for (const image of form.data.images) {
			// console.log(`${newItem.id}-${image.name}`)

			imagekit.upload(
				{
					fileName: image.name,
					file: Buffer.from(await image.arrayBuffer())
				},
				async function (error, result) {
					if (error) {
						console.log(error);
					} else {
						if (result) {
                            
							await prisma.image.create({
								data: {
									itemId: newItem.id,
									url: result.url,
									altText: result.name
								}
							});
						}
					}
				}
			);
		}

		return message(form, 'Se registró el objeto con éxito!');
	}
};
