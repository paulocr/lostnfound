import { status, itemType } from '@prisma/client';
import { z } from 'zod';
import { person } from './personSchema';

function getCurrentDateTime() {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');

	// Return formatted datetime-local string
	return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const itemSchema = z.object({
	description: z.string(),
	location: z.string(),
	tags: z.string(),
	foundOrLost_at: z.string().default(getCurrentDateTime()),
	left_at: z.string().nullable(),
	status: z.nativeEnum(status),
	category: z.number(),
	itemType: z.nativeEnum(itemType),
	images: z.instanceof(File, { message: 'Por favor seleccione un archivo' }).array()
});

export const newItemSchema = itemSchema.merge(person);
