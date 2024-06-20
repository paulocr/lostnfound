import { PrismaClient, itemType } from '@prisma/client';
const prisma = new PrismaClient();

const categories = [
	'Gabachas',
	'Tennis',
	'Bultos',
	'Abrigos',
	'Uniformes',
	'Útiles',
	'Accesorios',
	'Cédulas',
	'Otros'
];

const mappedCategories = categories.map((category) => ({ name: category }));

function getRandomArrayElement<T>(arr: T[]): T {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

function getRandomItemType(): itemType {
	const enumValues = Object.values(itemType).filter(
		(value) => typeof value === 'string'
	) as itemType[]; // Filter for strings only
	const randomIndex = Math.floor(Math.random() * enumValues.length);
	return enumValues[randomIndex];
}

const main = async () => {
	const categoryCount = await prisma.category.count();

	if (categoryCount === 0) {
		await prisma.category.createMany({
			data: mappedCategories
		});
	}

  try {
	await prisma.image.create({
		data: {
			url: 'https://fakeimg.pl/400x400?text=[imagen]',
			altText: 'Placeholder'
		}
	});
  } catch(e) {
    console.log(e)
  }

	const categoriesFromDB = await prisma.category.findMany({
		select: {
			id: true
		}
	});

	for (let i = 1; i <= 100; i++) {
		try {
			await prisma.item.create({
				data: {
					description: `Objeto ${i}`,
					foundOrLost_at: new Date(),
					itemType: getRandomItemType(),
					status: 'new',
					category: {
						connect: {
							id: getRandomArrayElement(categoriesFromDB.map((c) => c.id))
						}
					},
					images: {
						create: {
              url: "https://fakeimg.pl/400x400?text=[imagen]",
              altText: "Placeholder"
            }
					},
					left_at: 'oficina',
					location: 'gimnasio',
					reporter: {
						create: {
							name: `persona ${i}`,
							class: `8${i}`,
							phone: `${i}${i}`
						}
					}
				}
			});
		} catch (e) {
			console.log(e);
		}
	}

	console.log('Database seeded successfully!');
	process.exit();
};

main()
	.then()
	.catch((e) => console.log(e));
