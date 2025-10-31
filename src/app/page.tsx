
// import getAllProducts from "@/apis/allProduct";
// import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { log } from "console"
// import HomeCard from "./-components/Navbar/HomeCard/HomeCard";
// import MainSlider from "./-components/Navbar/MainSlider/MainSlider";

// import MainCategories from "./-components/MainCategories/MainCategories";
// import { Product } from "@/types/products.type";



// export default async function Home() {
//   const data :Product[] =await getAllProducts()
  

//     return (
     
//         <section className="px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto">
//           <MainSlider/>
//           <MainCategories/>
//          <div className="flex flex-wrap">
//       {data.map((product :Product ,idx:number)=> <HomeCard key={idx} product={product}/>)}
//   </div>

//   </section>

//   );
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/register");
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-500 text-lg">Redirecting to Register...</p>
    </div>
  );
}
