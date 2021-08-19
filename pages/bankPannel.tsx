import React from 'react'

interface Props {
   moneyPannel: number[]
   handleAddMoneyToWallet: Function
}

const BankPannel = ({ moneyPannel, handleAddMoneyToWallet }: Props) => {
   return (
      <>
         <div className="box-border md:box-content  border-2 p-3">
            <h1 className="m-auto text-2xl font-center font-small leading-normal mt-0 mb-2 text-pink-800">
               Bank Amount Pannel
            </h1>
            <hr />
            <div className="grid grid-cols-9 gap-4 text-center mt-2">
               {moneyPannel.map((ruppes, index) => {
                  return (
                     <button
                        onClick={() => handleAddMoneyToWallet(ruppes)}
                        key={index}
                        className="p-1 text-white bg-blue-500 rounded font-bold"
                     >
                        {' '}
                        ₹ {ruppes}
                     </button>
                  )
               })}
            </div>
         </div>
      </>
   )
}

export default BankPannel
