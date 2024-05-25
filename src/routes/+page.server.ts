import prisma from '$lib/prisma';
import { imagekit } from '$lib/imagekit.js';

export const load = async ({ locals }) => {
	const items = await prisma.item.findMany({ include: { images: true } });

	// items.map((item) => {
	// 	item.images.map((image) => {
	// 		image.url = imagekit.url({ path: image.url, transformation: [{ height: 400, width: 400 }] });
	// 		return image;
	// 	});
	// });

	return { items, locals };
};
