import { z } from "zod";
import { person } from "./personSchema";


const itemSchema = z.object({
    itemId: z.number()
})

export const claimSchema = person.merge(itemSchema)


// export const claimSchema = z.object({
//     name: z.string(),
//     phone: z.string(),
//     itemId: z.number()
// })