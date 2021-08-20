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
         <div className="box-border md:box-content  border-2 p-3">
            <h1 className="m-auto text-2xl font-center font-small leading-normal mt-0 mb-2 text-pink-800">
               Purchased Products
            </h1>
            <hr />
            <div className="grid grid-cols-1 gap-4  mt-2">
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
      </>
   )
}

export default PurchasedProducts
