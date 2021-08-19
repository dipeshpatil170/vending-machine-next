import Image from 'next/image'
import React from 'react'

interface Props {
   purchasedProduct: IPurchasedProduct
}
const PurchasedProduct = ({ purchasedProduct }: Props) => {
   return (
      <div className="box-border p-2 border-2 w-1/6">
         <ul className="list-none">
            <li>
               <Image
                  src={purchasedProduct.image}
                  alt={purchasedProduct.image}
                  layout="responsive"
                  height="100%"
                  width="100%"
               />
            </li>
            <li className="font-semibold">Name : {purchasedProduct.name} </li>
            <li className="font-semibold">
               Quantity : {purchasedProduct.quantity}
            </li>
            <li className="font-semibold">Price : {purchasedProduct.price}</li>
            <li className="font-semibold">
               <button
                  className=" transition delay-150 duration-300 ease-in-out bg-red-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
               >
                  Return
               </button>
            </li>
         </ul>
      </div>
   )
}

export default PurchasedProduct
