// import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
// import Link from 'next/link'
// import Logo  from '../../../../public/screens/freshcart-logo.svg'
// import Image  from 'next/image'

// import React from 'react'

// const Navbar=()=>{
//     return(
//         <div className='bg-slate-100 py-5'>
//             <div className='w-full md:w-[80%] mx-auto flex flex-col md:flex-row text-center justify-between items-center'>
//                 {/* logo &links */}
//               <ul className='flex flex-col md:flex-row text-center gap-6 items-center'>
//                 <li><Link href={'/'}>
//                 <Image src={Logo} alt="logo"/>
//                 </Link></li>

              

//                 <li>
//                     <Link href="/cart">Cart</Link>
//                 </li>

//                 <li>
//                     <Link href="/brands">Brands</Link>
//                 </li>

//                 <li>
//                     <Link href="/categories">Categories</Link>
//                 </li>
//               </ul>
//                 {/* icons&button*/}
//                 <div className='flex flex-col md:flex-row text-center gap-2 items-center '>
                  
//                         <i className='fab mx-2 fa-facebook-f'></i>
//                         <i className='fab mx-2 fa-youtube'></i>
//                         <i className='fab mx-2 fa-twitter'></i>
//                         <i className='fab mx-2 fa-linkedin'></i>
                 
               
//                 <div>
                
//                    <Link href="/login">Login</Link> 
//                 </div>
//                 <div>
//                    <Link href="/register">Register</Link> 
//                 </div>
//                 <div>
//                     <button>Logout</button>
//                 </div>
                
//             </div>
//         </div>
//          </div>

//     )
// }
// export default Navbar;

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/screens/freshcart-logo.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-slate-100 py-5">
      <div className="w-full md:w-[80%] mx-auto flex flex-col md:flex-row text-center justify-between items-center">
        {/* logo & links */}
        <ul className="flex flex-col md:flex-row text-center gap-6 items-center">
          <li>
            <Link href="/">
              <Image src={Logo} alt="logo" width={120} height={40} />
            </Link>
          </li>

          <li>
            <Link href="/cart">Cart</Link>
          </li>

          <li>
            <Link href="/brands">Brands</Link>
          </li>

          <li>
            <Link href="/categories">Categories</Link>
          </li>
        </ul>

        {/* icons & buttons */}
        <div className="flex flex-col md:flex-row text-center gap-3 items-center mt-4 md:mt-0">
          {/* Social icons */}
          <div className="flex gap-4 text-xl">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              <i className="fab fa-youtube"></i>
            </Link>

            <Link
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-700 transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </Link>

        
          </div>

          {/* Auth buttons */}
          <div className="flex gap-3 mt-3 md:mt-0">
            <Link href="/login" className="text-gray-700 hover:text-black">Login</Link>
            <Link href="/register" className="text-gray-700 hover:text-black">Register</Link>
                  <Link href="/logout">
            <Button variant="destructive">Logout</Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
