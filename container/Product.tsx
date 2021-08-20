import Image from 'next/image'
import React, { useState } from 'react'
import BounceProgressBubble from '../components/BounceProgressBubble'
interface Props {
   product: IProduct
   handleBuyProduct: Function
   balance: Ibalance
}

const Product = ({ product, handleBuyProduct, balance }: Props) => {
   const [isBuyProductLoading, setIsBuyProductLoading] =
      useState<boolean>(false)
   const buyProduct = (product: IProduct) => {
      setIsBuyProductLoading(true)

      handleBuyProduct(product)
      setTimeout(() => {
         setIsBuyProductLoading(false)
      }, 1000)
   }
   return (
      <div className="box-border p-2 border-2 ">
         <ul className="list-none">
            <li>
               <Image
                  src={product.image}
                  alt={product.image}
                  layout="responsive"
                  height="100%"
                  width="100%"
               />
            </li>
            <li className="font-semibold">Name : {product.name}</li>
            {product.quantity > 0 ? (
               <li className="font-semibold">Quantity : {product.quantity}</li>
            ) : (
               <li className="font-semibold text-red-500">Out of stock</li>
            )}
            <li className="font-semibold">Price : {product.price}</li>
            <li className="font-semibold">
               {balance.amount >= product.price && product.quantity > 0 ? (
                  <button
                     onClick={() => buyProduct(product)}
                     className=" transition delay-150 duration-300 ease-in-out bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                     type="button"
                  >
                     {isBuyProductLoading ? 'Buying' : 'buy'}
                  </button>
               ) : product.quantity <= 0 ? (
                  <></>
               ) : (
                  <button
                     disabled={true}
                     className="disabled:opacity-50  bg-green-500 text-white  font-bold uppercase text-sm px-6 py-2 rounded shadow"
                     type="button"
                  >
                     Buy
                  </button>
               )}
            </li>
         </ul>
         {isBuyProductLoading && <BounceProgressBubble />}
      </div>
   )
}

export default Product
