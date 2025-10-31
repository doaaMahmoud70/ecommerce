import React from 'react' 
import Image from 'next/image'
import error from '../../public/screens/404.jpg'
const ErrorPage=()=>{
   return(
    <div className='w-full md:w-[80%] mx-auto px-5 my-5 md:px-0'>
<Image src={error} alt='error'/>
    </div>
    )
}
export default ErrorPage