import * as z from "zod";
 
export const loginSchema = z.object({
 
  email:z.email("invalid email"),
  password:z.string().min(4,"min length is 4").max(20,"max length is 20"),


})

export type LoginSchemaType=z.infer<typeof loginSchema>

