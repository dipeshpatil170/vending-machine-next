import React, { useState } from 'react'

interface Props {
   ruppes: number
   handleAddMoneyToWallet: Function
}

const MoneyButtons = ({ ruppes, handleAddMoneyToWallet }: Props) => {
   const [isDisableMoneyButton, setIsDisableMoneyButton] = useState(false)

   const addMoney = (ruppes: number) => {
      setIsDisableMoneyButton(true)
      handleAddMoneyToWallet(ruppes)

      setTimeout(() => {
         setIsDisableMoneyButton(false)
      }, 1000)
   }
   return isDisableMoneyButton ? (
      <button className="p-1 text-white bg-blue-500 rounded font-bold">
         Adding {ruppes}₹
      </button>
   ) : (
      <button
         onClick={() => addMoney(ruppes)}
         className="p-1 text-white bg-blue-500 rounded font-bold"
      >
         ₹ {ruppes}
      </button>
   )
}

export default MoneyButtons
