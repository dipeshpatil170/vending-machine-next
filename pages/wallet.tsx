import React from 'react'
import { SWRResponse } from 'swr'
import BounceProgressBubble from '../components/BounceProgressBubble'

interface Props {
   balance: SWRResponse<Ibalance, Error>
   isBalanceLoading: boolean
}

const Wallet = ({ balance, isBalanceLoading }: Props) => {
   const { data, error } = balance

   return (
      <>
         <div className="box-border md:box-content  border-2 p-3">
            <h1 className="m-auto text-2xl font-center font-small leading-normal mt-0 mb-2 text-pink-800">
               Wallet
            </h1>
            <hr />
            {error ? (
               <p className="text-red-500">{error?.message}</p>
            ) : isBalanceLoading ? (
               <h2 className="m-auto  font-center font-small leading-small mt-0 mb-2 text-black-800">
                  Updating Wallet 😀
               </h2>
            ) : (
               <h2 className="m-auto  font-center font-small leading-small mt-0 mb-2 text-black-800">
                  Amount : ₹ {data?.amount}
               </h2>
            )}
         </div>

         {isBalanceLoading && <BounceProgressBubble />}
      </>
   )
}

export default Wallet
