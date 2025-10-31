export default async function getAllProducts(){
  const response =await fetch('https://ecommerce.routemisr.com/api/v1/products' ,{//i can change this api to unreal api like "http://localhost:3000/users/api" and it works
    // cache:'force-cache' no update ever (Static Site Generation(SSG))
    // cache:'no-store'.   update every requist (Server-Side Rendering (SSR))
    next:{
      revalidate:5000. //this page will be cached(updated) every 5sec (Incremental Static Regeneration(ISR))
    }
})
   const {data}=await response.json()   


return data
}
