import React from 'react'
import { SWRResponse } from 'swr'
import Product from '../container/Product'
interface Props {
   products: SWRResponse<IProduct[], Error>
   balance: Ibalance
   handleBuyProduct: Function
}

const Products = ({ products, handleBuyProduct, balance }: Props) => {
   const { data, error } = products
   return (
      <>
         <div className="box-border md:box-content border-2 my-11 rounded">
            <div className="bg-gray-200">
               <div className="flex justify-center">
                  <h1 className="m-auto text-4xl font-center font-normal leading-normal mt-0 mb-2 text-pink-800">
                     List of Products
                  </h1>
               </div>
            </div>

            <div className="flex justify-center py-2">
               <div className="grid grid-cols-4 gap-5">
                  {data &&
                     data.map((product) => {
                        return (
                           <Product
                              key={product.id}
                              product={product}
                              handleBuyProduct={handleBuyProduct}
                              balance={balance}
                           />
                        )
                     })}
               </div>
               {error && (
                  <p className="text-red-500 font-bold">{`Products not Found : ${error?.message}`}</p>
               )}
            </div>
         </div>
      </>
   )
}

export default Products
