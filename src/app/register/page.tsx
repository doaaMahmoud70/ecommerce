// "use client"


// import { Button } from '@/components/ui/button'
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'
// import { RegisterSchemaType, registerSchema } from '@/schema/register.schema'
// import { log } from 'console'
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { ZodObject, ZodString, ZodEmail, date } from 'zod'
// import axios from 'axios'
// import { zodResolver } from "@hookform/resolvers/zod"
// import { toast } from 'sonner'
// import { useRouter } from 'next/navigation'



// const Register=()=>{
//   const router=useRouter (); 

// const form=useForm <RegisterSchemaType>({
//  defaultValues:{

//     name:"",
//     email:"",
//     password:"",
//     rePassword:"",
//     phone:"",
//  },
//  resolver:zodResolver(registerSchema)
// });

// async function handleRegister(values:RegisterSchemaType){
//     try{
//       const{data}=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
//        console.log(data);
  
//     toast.success(data.message,{
//     position: "top-center",
//     duration: 3000
//     })
//        router.push("/login")
       
//     }catch(error){
//   toast.error(error.response.data.message,{
//         position:'top-center',
//         duration:3000
//      });
//   }
// }

//    return(
//     <div className='mx-auto px-5 md:px-0 w-full my-12 md:w-1/2'>
//       <h1 className='text-3xl font-bold text-center mb-10'>Register form</h1>
  
// <Form {...form}>

//      <form onSubmit={form.handleSubmit(handleRegister)}>
//   <FormField
//     control={form.control}
//     name="name"
//     render={({field}) => (
//       <FormItem>
//         <FormLabel >Name</FormLabel>
//         <FormControl>
//        <Input type="text" {...field} />
//         </FormControl>
//         <FormDescription />
//         <FormMessage />
//       </FormItem>
//     )}
//   />

//     <FormField
//     control={form.control}
//     name="email"
//     render={({field}) => (
//       <FormItem>
//         <FormLabel >Email</FormLabel>
//         <FormControl>
//        <Input type="email" {...field} />
//         </FormControl>
//         <FormDescription />
//         <FormMessage />
//       </FormItem>
//     )}
//   />

//     <FormField
//     control={form.control}
//     name="password"
//     render={({field}) => (
//       <FormItem>
//         <FormLabel >Password</FormLabel>
//         <FormControl>
//        <Input type="password" {...field} />
//         </FormControl>
//         <FormDescription />
//         <FormMessage />
//       </FormItem>
//     )}
//   />
//       <FormField
//     control={form.control}
//     name="rePassword"
//     render={({field}) => (
//       <FormItem>
//         <FormLabel >Confirm Password</FormLabel>
//         <FormControl>
//        <Input type="password" {...field} />
//         </FormControl>
//         <FormDescription />
//         <FormMessage />
//       </FormItem>
//     )}
//   />

//       <FormField
//     control={form.control}
//     name="phone"
//     render={({field}) => (
//       <FormItem>
//         <FormLabel >Phone</FormLabel>
//         <FormControl>
//        <Input type="tel" {...field} />
//         </FormControl>
//         <FormDescription />
//         <FormMessage />
//       </FormItem>
//     )}
//   />
// <Button className='w-full mt-5'>register now</Button>

// </form>

// </Form>

//     </div>
//    )
// }

// export default Register;

 "use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { registerSchema, RegisterSchemaType } from "@/schema/register.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export default function RegisterPage() {
  const router = useRouter();

  const form = useForm<RegisterSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (values: RegisterSchemaType) => {
    try {
      // استدعاء API التسجيل
      const res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);

      if (res.data?.message) {
        toast.success("Account created successfully!", { position: "top-center" });

        // بعد نجاح التسجيل، نجيب بيانات الـ Home
        const homeData = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
        console.log("Home data:", homeData.data);

        // الانتقال للـ Home بعد استدعاء البيانات
         router.push("/login")
      } else {
        toast.error("Registration failed", { position: "top-center" });
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Registration failed", { position: "top-center" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 md:px-0">
      <h1 className="text-3xl font-bold mb-8">Create your account</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleRegister)}
          className="flex flex-col gap-4 w-full md:w-1/2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="Your email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="Confirm password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Phone number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mt-4 w-full">Register</Button>
        </form>
      </Form>

      <p className="mt-6 text-gray-600">
        Already have an account?{" "}
        <a
          onClick={() => router.push("/login")}
          className="text-blue-500 underline cursor-pointer"
        >
          Log in
        </a>
      </p>
    </div>
  );
}
