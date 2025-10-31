
//  "use client";

// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { RegisterSchemaType, registerSchema } from "@/schema/register.schema";
// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { loginSchema, LoginSchemaType } from "@/schema/login.schema";
// import { signIn } from "next-auth/react";

// const Login = () => {
//   const router = useRouter();

//   const form = useForm<LoginSchemaType>({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//       rePassword: "",
//       phone: "",
//     },
//     resolver: zodResolver(loginSchema),
//   });

//   async function handlelogin(values: LoginSchemaType) {
//     // try {
//     //   const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values);
//     //   console.log(data);

//     //   toast.success(data.message, {
//     //     position: "top-center",
//     //     duration: 3000,
//     //   });

//     //   router.push("/Home");
//     // } catch (error: any) {
//     //   toast.error(error.response?.data?.message || "Login failed", {
//     //     position: "top-center",
//     //     duration: 3000,
//     //   });
//     // }


//     const res = await signIn("credentials", {
//       email: values.email,
//       password: values.password,
//       redirect: false,
//       callbackUrl: "/",
//     });
//     if(res?.ok){
//         toast.success("login is success", {
//         position: "top-center",
//         duration: 1000,
//       })
//       window.location.href=res.url||"/"
//     }
    
//     else{
//           toast.error(res?.error, {
//         position: "top-center",
//         duration: 1000,
//     })
//   }
//   }
//   return (
//     <div className="mx-auto px-5 md:px-0 w-full my-12 md:w-1/2">
//       <h1 className="text-3xl font-bold text-center mb-10">Log in form</h1>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(handlelogin)}>
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input type="email" {...field} />
//                 </FormControl>
//                 <FormDescription />
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <Input type="password" {...field} />
//                 </FormControl>
//                 <FormDescription />
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button className="w-full mt-5">Login now</Button>
//         </form>
//       </Form>
//     </div>
//   );
// }

// export default Login;


"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "@/schema/login.schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import React from "react";

const Login = () => {
  const router = useRouter();

  const form = useForm<LoginSchemaType>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  async function handlelogin(values: LoginSchemaType) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.ok) {
      toast.success("Login successful!", { duration: 1500 , position:'top-center',});
      router.push("/Home");
    } else {
      toast.error(res?.error || "Incorrect email or password", { duration: 1500 });
    }
  }

  return (
    <div className="mx-auto w-full md:w-1/2 my-12 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handlelogin)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-6">Login now</Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
