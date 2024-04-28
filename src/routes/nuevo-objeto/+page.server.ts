import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";
import { schema } from "./schema";
import { message, superValidate } from "sveltekit-superforms";

export const load = async () => {
    const form = await superValidate(zod(schema));
    return { form };
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		console.log(form);

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data

		return message(form, 'Se registró el objeto con éxito!');
	}
};