import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";
import { schema } from "./schema";
import { message, superValidate } from "sveltekit-superforms";
import prisma from "$lib/prisma";

export const load = async () => {
    const form = await superValidate(zod(schema));
    return { form };
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));

        console.log(form)


        
		if (!form.valid) {
			return fail(400, { form });
		}

		const newItem = await prisma.items.create({data: {
            description: form.data.description,
            location: form.data.location,
            found: form.data.found,
            tags: form.data.tags
        }});

        for (const image of form.data.images) {
            console.log(`${newItem.id}-${image.name}`)
        }        

		return message(form, 'Se registró el objeto con éxito!');
	}
};