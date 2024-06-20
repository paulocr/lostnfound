import prisma from '$lib/prisma';

export const load = async ({ locals }) => {
	// if (!locals.user) return {};
	// const user = await prisma.user.findUnique({ where: { id: locals?.user?.id } });

	const items = await prisma.item.findMany({
		include: {
			category: true, images: true, claimedBy: true
		},
		orderBy: {
			created_at: 'desc'
		}
	});

	return { items };
};
