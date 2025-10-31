import { NextRequest, NextResponse } from "next/server"

 
export async function GET(req:NextRequest) {
//   const data =[
//     {id:1 ,name:"doaa"},
//      {id:1 ,name:"reem"},
//   ]
 
 
//   return NextResponse.json( data )

const res=await fetch("https://ecommerce.routemisr.com/api/v1/products")
const data=await res.json()
return NextResponse.json( data )
}