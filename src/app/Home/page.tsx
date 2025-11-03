

import getAllProducts from "@/apis/allProduct";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { log } from "console"

import { Product } from "@/types/products.type";

import HomeCard from "../-components/HomeCard/Page";
import MainCategories from "../-components/MainCategories/MainCategories";
import MainSlider from "../-components/Navbar/MainSlider/MainSlider";




export default async function Home() {
  const data :Product[] =await getAllProducts()
  

    return (
     
        <section className="px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto">
          <MainSlider/>
          <MainCategories/>
         <div className="flex flex-wrap">
      {data.map((product :Product ,idx:number)=> <HomeCard key={idx} product={product}/>)}
  </div>

  </section>

  );
}