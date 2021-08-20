import Image from 'next/image'
import React, { useState } from 'react'
import BounceProgressBubble from '../components/BounceProgressBubble'

interface Props {
   purchasedProduct: IPurchasedProduct
   handleReturnProduct: Function
}
const PurchasedProduct = ({ purchasedProduct, handleReturnProduct }: Props) => {
   const [isReturnProductLoading, setIsReturnProductLoading] = useState(false)
   const returnProduct = (purchasedProduct: IPurchasedProduct) => {
      setIsReturnProductLoading(true)

      handleReturnProduct(purchasedProduct)

      setTimeout(() => {
         setIsReturnProductLoading(false)
      }, 1000)
   }

   return (
      <div className="box-border p-2 border-2">
         <ul className="list-none">
            <li>
               <Image
                  src={purchasedProduct.image}
                  alt={purchasedProduct.image}
                  layout="responsive"
                  height="60%"
                  width="100%"
               />
            </li>
            <li className="font-semibold">Name : {purchasedProduct.name} </li>
            <li className="font-semibold">
               Quantity : {purchasedProduct.quantity}
            </li>
            <li className="font-semibold">Price : {purchasedProduct.price}</li>
            <li className="font-semibold">
               {isReturnProductLoading ? (
                  <button
                     className=" opacity.500 transition delay-100 duration-300 ease-in-out bg-gray-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100"
                     type="button"
                  >
                     Returning 😀
                  </button>
               ) : (
                  <button
                     onClick={() => returnProduct(purchasedProduct)}
                     className=" transition delay-150 duration-300 ease-in-out bg-red-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                     type="button"
                  >
                     Return
                  </button>
               )}
            </li>
            {isReturnProductLoading && (
               <li>
                  <BounceProgressBubble />
               </li>
            )}
         </ul>
      </div>
   )
}

export default PurchasedProduct
