import * as z from "zod";
 
export const registerSchema = z.object({
  name: z.string().min(4,"min length is 4").max(20,"max length is 20"),
  email:z.email("invalid email"),
  password:z.string().min(4,"min length is 4").max(20,"max length is 20"),
  rePassword:z.string().min(4,"min length is 4").max(20,"max length is 20"),
  phone:z.string().regex(/^01[0125][0-9]{8}$/,"invalid phone number")

}).refine(function(object){
    if(object.password === object.rePassword){
       return true;
    }else{
        return false;
    }
},{
path:["rePassword"],
error:"password not match"

})

export type RegisterSchemaType=z.infer<typeof registerSchema>

