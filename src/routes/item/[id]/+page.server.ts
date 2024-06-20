import { imagekit } from '$lib/imagekit';
import prisma from '$lib/prisma';

export const load = async ({ params }) => {
	const id = Number(params.id);
	const item = await prisma.item.findUnique({
		where: { id: id },
		include: { images: true, reporter: true }
	});

	// item?.images.map((image) => {
	// 	image.url = imagekit.url({ path: image.url, transformation: [{ height: 400, width: 400 }] });
	// });

	return { item };
};
