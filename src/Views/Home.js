import React from "react"

import ProductCard from '../Components/ProductCard'
import {useAxiosGet} from "../Hooks/HttpRequest"

function Home() {
  const url = 'https://5f7151c564a3720016e60491.mockapi.io/products'

  let products=useAxiosGet(url)

let content=null
  if (products) {
    content =
      products.map(product=>
      <div key={product.id}>
      <ProductCard
         product={product}     />
        </div>
      )
  }
  return (
    <div>
      <h1 className='font-bold text-2xl p-2 '
      > This is home page</h1>
      {content}
    </div>
  )
}

export default Home