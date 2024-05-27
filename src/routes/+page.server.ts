import prisma from '$lib/prisma';

export const load = async ({ locals }) => {
	const items = await prisma.item.findMany({ include: { images: true } });
	
	return { items, locals };
};
