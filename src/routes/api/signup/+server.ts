import prisma from '$lib/prisma';
import { signupSchemaRaw } from '$lib/schemas/signupSchema';
import { error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { nanoid } from 'nanoid';
import { Argon2id } from 'oslo/password';


export async function POST({ request }) {
	const requestData = await request.json();
	const form = await superValidate(requestData, zod(signupSchemaRaw));

    const hashedPassword = await new Argon2id().hash(requestData.password);

	if (!form.valid) {
		return error(400, { message: JSON.parse(JSON.stringify(form.errors)) });
	}

    const userId = nanoid();

    const newUser = await prisma.user.create({
        data: {
            id: userId,
            password: hashedPassword,
            username: requestData.username
        }
    })

    console.log(`${newUser.id} created`);

    return new Response("OK")
}