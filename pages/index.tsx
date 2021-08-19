import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { addBalance, fetchBalance } from './api/balanceApi'
import { fetchProducts } from './api/productsApi'
import { buyProduct, fetchPurchasedProduct } from './api/purchasedProductApi'
import BankPannel from './bankPannel'
import Products from './products'
import PurchasedProducts from './purchasedProducts'
import Wallet from './wallet'

const Home: NextPage = () => {
   const [isBalanceLoading, setIsBalanceLoading] = useState<boolean>(false)

   const [isBuyProductLoading, setIsBuyProductLoading] =
      useState<boolean>(false)

   const [balanceAmount, setBalanceAmount] = useState<Ibalance>()

   const moneyPannel: number[] = [5, 10, 20, 30, 50, 100, 500]

   const products = useSWR<IProduct[], Error>('products', fetchProducts)

   const balance = useSWR<Ibalance, Error>('balance', fetchBalance)

   const purchasedProducts = useSWR<IPurchasedProduct[], Error>(
      'purchasedproducts',
      fetchPurchasedProduct
   )

   useEffect(() => {
      setBalanceAmount(balance.data)
   }, [balance])

   const handleAddMoneyToWallet = (amount: number) => {
      setIsBalanceLoading(true)
      addBalance(amount)

      setTimeout(() => {
         balance.revalidate()
         setIsBalanceLoading(false)
      }, 1000)
   }

   const handleBuyProduct = (product: IProduct) => {
      setIsBuyProductLoading(true)
      buyProduct(product)

      setTimeout(() => {
         products.revalidate()
         purchasedProducts.revalidate()
         balance.revalidate()
         setIsBuyProductLoading(false)
      }, 1000)
   }

   return (
      <>
         <div className="md:container md:mx-auto">
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
                     {purchasedProducts && (
                        <li className="font-semibold">
                           <PurchasedProducts
                              purchasedProducts={purchasedProducts}
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
