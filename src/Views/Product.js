import React from "react"
import {Link, useParams} from 'react-router-dom'
import {useAxiosGet} from "../Hooks/HttpRequest"
function Product() {
  const{id}=useParams()

  const url = `https://5f7151c564a3720016e60491.mockapi.io/products/${id}`
  let product=useAxiosGet(url)
let content=null
  if (product) {
   content =
      <div>
        <h1 className='text-2xl font-bold mb-3'>
          {product.name}
      </h1>
        <div>
          <img src={product.images} alt={product.name}/>
        </div>
        <div className='font-bold text-xl mb-3'>
          ${product.price}
        </div>
        <div>
          {product.description}
        </div>
        <div className='bg-gray-500 text-white m-3 p-2 flex justify-center align-center'
           >
       <Link to={'/'}>GO Back</Link>
        </div>
      </div>


  }
  return (
    <div>{content}</div>
  )

}

export default Product