import { getObjects } from '$lib/server/s3';
import prisma from '$lib/prisma';

export const load = async () => {
	// console.log(await getObjects());
	const items = await prisma.items.findMany({ include: { images: true } });
	return { items };
};
