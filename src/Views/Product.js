import React from "react"
import {Link, useParams} from 'react-router-dom'
import {useAxiosGet} from "../Hooks/HttpRequest"
import Loading from "../Components/Loading"
function Product() {
  const{id}=useParams()

  const url = `https://5f7151c564a3720016e60491.mockapi.io/products/${id}`
  let product=useAxiosGet(url)
  let content=null
  if(product.error){
    content=<Link to={'/'}
                  className='bg-blue-500 text-white p-3 flex justify-center align-center mt-3'
    >GO Back</Link>
  }

  if(product.loading){
    content=<Loading/>
  }

  if (product.data) {
   content =
      <div>
        <h1 className='text-2xl font-bold mb-3'>
          {product.data.name}
      </h1>
        <div>
          <img src={product.data.images} alt={product.data.name}/>
        </div>
        <div className='font-bold text-xl mb-3'>
          ${product.data.price}
        </div>
        <div>
          {product.data.description}
        </div>
       <Link to={'/'}
             className='bg-blue-500 text-white p-3 flex justify-center align-center mt-3'
       >GO Back</Link>

      </div>


  }
  return (
    <div>{content}</div>
  )

}

export default Product