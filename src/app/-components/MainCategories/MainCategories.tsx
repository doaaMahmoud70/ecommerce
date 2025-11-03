import getAllCategories from '@/apis/allCategories';
import React from 'react'

import { Category } from '@/types/products.type';
import SwiperCategory from '../SwiperCategory/SwiperCategory';
const MainCategories=async ()=>{
    type categories = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};
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