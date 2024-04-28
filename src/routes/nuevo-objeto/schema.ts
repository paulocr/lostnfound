import { z } from 'zod';

export const schema = z.object({
	description: z.string(),
	location: z.string(),
	tags: z.string(),
	found: z.date(),
	images: z.instanceof(File, { message: 'Por favor seleccione un archivo' }).array()
});
