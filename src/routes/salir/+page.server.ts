import { lucia } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals }) => {
		if (locals.user) {
			await lucia.invalidateUserSessions(locals.user.id);
			redirect(301, '/');
		}
	}
};
