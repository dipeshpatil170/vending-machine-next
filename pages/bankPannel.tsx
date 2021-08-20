import React from 'react'
import MoneyButtons from '../container/MoneyButtons'

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
            <div className="grid grid-cols-6 gap-4 text-center mt-2">
               {moneyPannel.map((ruppes) => {
                  return (
                     <MoneyButtons
                        key={ruppes}
                        ruppes={ruppes}
                        handleAddMoneyToWallet={handleAddMoneyToWallet}
                     />
                  )
               })}
            </div>
         </div>
      </>
   )
}

export default BankPannel
