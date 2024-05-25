import prisma from "$lib/prisma"

export const load = async ({locals}) => {
    if (!locals.user) return {}
    const user = await prisma.user.findUnique({where: {id: locals?.user?.id}})
    return { user }
    
}
