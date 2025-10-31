import getAllCategories from '@/apis/allCategories';
import React from 'react'
import SwiperCategory from '../SwiperCategory/SwiperCategory';
import { Category } from '@/types/products.type';
const MainCategories=async ()=>{
   const data:Category[]=await getAllCategories()
  
    return(
    <div className='mb-3'>
        <SwiperCategory categories={data}/>

    </div>
    )

}
export default MainCategories


// maincategory,swipocategory
// homecard,page