import React from 'react'
import { SWRResponse } from 'swr'
import PurchasedProduct from '../container/PurchasedProduct'

interface Props {
   purchasedProducts: SWRResponse<IPurchasedProduct[], Error>
   handleReturnProduct: Function
}

const PurchasedProducts = ({
   purchasedProducts,
   handleReturnProduct,
}: Props) => {
   const { data, error } = purchasedProducts
   return (
      <>
         <div className="box-border md:box-content  border-2 rounded">
            <div className="bg-gray-200 py-2 px-3">
               <h1 className="m-auto text-2xl font-center font-small leading-normal mt-0 mb-2 text-pink-800">
                  Purchased Products
               </h1>
            </div>
            <div className="bg-white-100 py-2 px-3">
               <div className="grid grid-cols-4 gap-4">
                  {data &&
                     data.map((purchasedProduct) => {
                        return (
                           <PurchasedProduct
                              key={purchasedProduct.id}
                              purchasedProduct={purchasedProduct}
                              handleReturnProduct={handleReturnProduct}
                           />
                        )
                     })}
               </div>
            </div>
         </div>
      </>
   )
}

export default PurchasedProducts
