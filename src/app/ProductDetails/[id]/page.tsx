
// // import { log } from 'console'

// // import getSingleProducts from '@/apis/singleProduct';
// // import HomeCard from '@/app/-components/Navbar/HomeCard/HomeCard';
// // import React from 'react'
// // import { Button } from '@/components/ui/button';
// // import Image from 'next/image';
// // const ProductDetails=async ({params}:{params:{id:string}})=>{
// // const {id}= await params ;
// // const data= await getSingleProducts(id)


// // console.log(data);
// //    return(
// //     <div className='w-full px-5 md:w-[80%] md:px-0 mx-auto my-10 flex items-center flex-col md:flex-row'>
// //       <div className='w-full md:w-1/3'>
// //         <Image width={500} height={500} src={data.imageCover} className='w-full' alt=''/>
// //       </div>
// //       <div className='w-full md:w-2/3 m-10 md:m-0 ps-10 '>
// //        <h2 className='text-2xl text-green-500 font-bold '>{data.title}</h2>
// //        <p className='my-5'>{data.description}</p>
// //        <p className='my-5'>{data.category.name}</p>
// //          <div className=" flex justify-between items-center">
// //   <p>{data.price}EGP</p>
// //   <p>{data.ratingsAverage}<i className="fa-solid fa-star text-yellow-300"></i></p>
// //     </div>
// //       <Button  className='w-full my-5' variant="default">Add to Card</Button>
// //       </div>
// //     </div>

// //     )
// // }
// // export default ProductDetails
"use client";

import getSingleProducts from "@/apis/singleProduct";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const product = await getSingleProducts(id);
      setData(product);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!data) return;

 
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");


    const exists = storedCart.find((p: any) => p.id === data.id);
    if (!exists) {
      storedCart.push(data);
      localStorage.setItem("cart", JSON.stringify(storedCart));
      alert(`${data.title} added to your cart!`);
    } else {
      alert("This product is already in your cart!");
    }


    router.push("/cart");
  };

  if (!data) {
    return <p className="text-center my-10 text-gray-500">Loading product...</p>;
  }

  return (
    <div className="w-full px-5 md:w-[80%] md:px-0 mx-auto my-10 flex flex-col md:flex-row items-start">
      <div className="w-full md:w-1/3">
        <Image
          width={500}
          height={500}
          src={data.imageCover}
          className="w-full"
          alt={data.title}
        />
      </div>

      <div className="w-full md:w-2/3 m-10 md:m-0 ps-10">
        <h2 className="text-2xl text-green-500 font-bold">{data.title}</h2>
        <p className="my-5">{data.description}</p>
        <p className="my-5">{data.category.name}</p>

        <div className="flex justify-between items-center">
          <p>{data.price} EGP</p>
          <p>
            {data.ratingsAverage}{" "}
            <i className="fa-solid fa-star text-yellow-300"></i>
          </p>
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full my-5"
          variant="default"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;

