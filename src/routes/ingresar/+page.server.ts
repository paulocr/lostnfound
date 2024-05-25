import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/schemas/loginSchema';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { Argon2id } from 'oslo/password';
import { lucia } from '$lib/server/auth';

export const load = async () => {
	const form = await superValidate(zod(loginSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request, locals, cookies }) => {
		const form = await superValidate(request, zod(loginSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		const existingUser = await prisma.user.findFirst({
			where: {
				username: form.data.username
			}
		});

        // user exists
		if (existingUser != null) {
			const validPassword = await new Argon2id().verify(existingUser.password, form.data.password);

            // user exists but passwords mismatch
            if (!validPassword) {
                return message(form, `Invalid username or password`, { status: 400 });    
            }

            // VALID PASSWORD
			console.log(`login valid password: ${validPassword}`);

            const session = await lucia.createSession(existingUser.id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);

			cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});

			redirect(302, '/');
		}

        // user does not exist
		if (existingUser === null) {
			return message(form, `Invalid username or password`, { status: 400 });
		}


	}
};
