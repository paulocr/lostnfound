import { z } from "zod";

export const person = z.object({
    name: z.string(),
    class: z.string(),
    phone: z.string()
  
      // reporterName: z.string(),
    // reporterClass: z.string(),
    // reporterPhone: z.string()
  })