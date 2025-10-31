import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import { log } from "console"
import Link from 'next/link'

import getSingleProducts from '@/apis/singleProduct';
import ProductDetails  from '@/app/ProductDetails/[id]/page'
import { Button } from '@/components/ui/button';
import MainSlider from '../MainSlider/MainSlider';
import { Product } from '@/types/products.type';
import Image from 'next/image';
const HomeCard=({product}:{product:Product})=>{

    return(

 
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">
  
         <div className="inner ">
        <Card className=" p-2">
           <Link href={`/ProductDetails/${product.id}`}>
  <CardHeader className="p-0">
    <Image width={500} height={500} className="w-full" src={product.imageCover} alt="product.title"/>
  </CardHeader>
  <CardContent className="p-0">
    <p className="font-bold text-green-500 mb-3">{product.category.name}</p>
    <p className="line-clamp-1">{product.title}</p>
  </CardContent>
  <CardFooter className="p-0">
    <div className="flex  justify-between items-center">
  <p>{product.price}EGP</p>
  <p>{product.ratingsAverage}<i className="fa-solid fa-star text-yellow-300"></i></p>
    </div>
     </CardFooter>
      </Link>
  <Button className='w-full' variant="default">Add to Card</Button>

</Card>



 </div>
  </div>
 
   
    
  
  
      ) 
}   
export default HomeCard



