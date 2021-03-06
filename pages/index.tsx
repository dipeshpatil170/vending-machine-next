import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import {
   addBalance,
   buyProduct,
   fetchBalance,
   fetchProducts,
   fetchPurchasedProduct,
   returnProduct,
} from './api/productsApi'
import BankPannel from './bankPannel'
import Products from './products'
import PurchasedProducts from './purchasedProducts'
import Wallet from './wallet'

const Home: NextPage = () => {
   const [isBalanceLoading, setIsBalanceLoading] = useState<boolean>(false)

   const [balanceAmount, setBalanceAmount] = useState<Ibalance>()

   const moneyPannel: number[] = [5, 10, 20, 30, 50, 100]

   const products = useSWR<IProduct[], Error>('products', fetchProducts)

   const balance = useSWR<Ibalance, Error>('balance', fetchBalance)

   const purchasedProducts = useSWR<IPurchasedProduct[], Error>(
      'purchasedproducts',
      fetchPurchasedProduct
   )

   useEffect(() => {
      setBalanceAmount(balance.data)
   }, [balance])

   const handleAddMoneyToWallet = async (amount: number) => {
      setIsBalanceLoading(true)
      const addbalance = await addBalance(amount)

      if (addbalance?.status === 200) {
         setTimeout(() => {
            balance.revalidate()
            setIsBalanceLoading(false)
         }, 1000)
      }
   }

   const handleBuyProduct = (product: IProduct) => {
      buyProduct(product)

      setTimeout(() => {
         products.revalidate()
         purchasedProducts.revalidate()
         balance.revalidate()
      }, 1000)
   }

   const handleReturnProduct = (purchasedProduct: IPurchasedProduct) => {
      returnProduct(purchasedProduct)

      setTimeout(() => {
         products.revalidate()
         purchasedProducts.revalidate()
         balance.revalidate()
      }, 1000)
   }

   return (
      <>
         <div className="md:container md:mx-auto">
            <div className="flex justify-center m-0 p-0">
               <h2 className="text-3xl font-center font-normal leading-normal  text-pink-800">
                  Vending Machine
               </h2>
            </div>
            <div className="flex">
               <div className="flex-1">
                  {products && balanceAmount && (
                     <Products
                        products={products}
                        handleBuyProduct={handleBuyProduct}
                        balance={balanceAmount}
                     />
                  )}
               </div>
               <div className="flex-1 ml-5">
                  <ul className="list-none">
                     {balance && (
                        <li className="font-semibold">
                           <Wallet
                              balance={balance}
                              isBalanceLoading={isBalanceLoading}
                           />
                        </li>
                     )}
                     <li className="font-semibold">
                        <BankPannel
                           moneyPannel={moneyPannel}
                           handleAddMoneyToWallet={handleAddMoneyToWallet}
                        />
                     </li>
                     {purchasedProducts &&
                        purchasedProducts.data &&
                        purchasedProducts.data?.length > 0 && (
                           <li className="font-semibold">
                              <PurchasedProducts
                                 purchasedProducts={purchasedProducts}
                                 handleReturnProduct={handleReturnProduct}
                              />
                           </li>
                        )}
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home
