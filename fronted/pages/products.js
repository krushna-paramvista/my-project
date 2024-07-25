import React from 'react'
import Link from 'next/link'

const Products = (props) =>{
  return(
  <div className="container mx-auto px-4">
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product-list My-Shop</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      {props.products.data.map((item)=>{
        return (
      
        <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
          <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <p class="leading-relaxed text-base">{item.attributes.description }</p>
          <Link href={'/product/${item.attributes.slug}'}> <button class="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm" >Buy Now</button></Link>
        </div>
        </div>
        )
    })}
    </div>
  </div>
</section>
  </div>
  )
}

export async function getServerSideProps(context) {
  let headers = {Authorization:"Bearer bce38b559cf03cac408b8693fc86fbb5be8d33003494c4fd013331c56a5f3ce6b201a40e692001bbe3d1f63bd319300d9bffa479f1268b3d6bf982e979ada14e55a646bfd982fcaefb717839bfa9e6eb635ca673655d1c70cb923a255d14f512c5ed9f904c6c66a1fb15d844765a010d884bc7dfce0ef21d73dceb36d031ded7"}
  let a = await fetch("http://localhost:1337/api/products?populate=*", {headers:headers})
  let products = await a.json()
  console.log(products)

  return {
    props: {products: products}, // will be passed to the page component as props
  }
}

export default Products;