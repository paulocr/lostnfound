import prisma from '$lib/prisma';

export const load = async ({ params }) => {
	const id = Number(params.id);
	const item = await prisma.items.findUnique({
		where: { id: id },
		include: { images: true }
	});

    return { item }
};
