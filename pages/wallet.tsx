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
         <div className="box-border md:box-content  border-2 rounded">
            <div className="bg-gray-200 py-2 px-3 ">
               <h1 className=" m-auto text-2xl font-center font-small leading-normal mt-0 mb-2 text-pink-800">
                  Wallet
               </h1>
            </div>
            <div className="bg-white-100 py-2 px-3 ">
               {error ? (
                  <p className="text-red-500 font-bold">{`Balance not found : ${error?.message}.`}</p>
               ) : isBalanceLoading ? (
                  <h2 className="m-auto  font-center font-small leading-small mt-0 mb-2 text-black-800">
                     Updating Wallet 😀
                  </h2>
               ) : (
                  <h2 className="m-auto  font-center font-small leading-small mt-0 mb-2  text-black-800">
                     Available Balance : ₹ {data?.amount}
                  </h2>
               )}
            </div>
         </div>

         {isBalanceLoading && <BounceProgressBubble />}

         {/* <div role="alert" className="mt-2">
            <div className="bg-green-500 text-white font-bold rounded-t px-4 py-1">
               Success
            </div>
            <div className="border-green-400 bg-green-100 border border-t-0  rounded-b  px-4 py-2 text-green-700">
               <p>Hi this is message</p>
            </div>
         </div> */}
      </>
   )
}

export default Wallet
