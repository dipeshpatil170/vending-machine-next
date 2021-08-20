import { apiConfig } from './index'

export const fetchProducts = async () => {
   const response = await apiConfig.get<IProduct[]>('products')
   return response.data
}

export const fetchBalance = async () => {
   const response = await apiConfig.get<Ibalance>('balance')
   return response.data
}

export const fetchPurchasedProduct = async () => {
   const response = await apiConfig.get<IPurchasedProduct[]>(
      '/purchasedproducts'
   )
   return response.data
}

export const addBalance = async (amount: number) => {
   const existingBalance = await apiConfig.get<Ibalance>('balance')
   if (existingBalance.status === 200) {
      const newBalance = existingBalance.data?.amount + amount
      const response = await apiConfig.patch<Ibalance>('balance', {
         amount: newBalance,
      })
      return response
   }
}

export const buyProduct = async (product: IProduct) => {
   const productToPurchase: IPurchasedProductS = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
   }

   const response = await apiConfig.post<IPurchasedProduct>(
      '/purchasedproducts',
      productToPurchase
   )

   if (response.status === 201) {
      product.quantity = product.quantity - 1
      const response = await apiConfig.put<IProduct>(
         `/products/${product.id}`,
         product
      )

      const existingBalance = await apiConfig.get<Ibalance>('/balance')

      if (existingBalance.status === 200) {
         const newBalance = existingBalance.data?.amount - product.price
         const response = await apiConfig.patch<Ibalance>('balance', {
            amount: newBalance,
         })
         return response.data
      }
   }
}

export const returnProduct = async (purchasedProduct: IPurchasedProduct) => {
   const response = await apiConfig.delete<IPurchasedProduct>(
      `/purchasedproducts/${purchasedProduct.id}`
   )
   if (response.status === 200) {
      const existingProduct = await apiConfig.get<IProduct>(
         `/products/${purchasedProduct.productId}`
      )
      let newProduct = existingProduct.data
      newProduct.quantity = newProduct.quantity + 1
      await apiConfig.put(`/products/${purchasedProduct.productId}`, newProduct)

      const existingBalance = await apiConfig.get<Ibalance>('/balance')

      if (existingBalance.status === 200) {
         const newBalance =
            existingBalance.data?.amount + purchasedProduct.price
         const response = await apiConfig.patch<Ibalance>('balance', {
            amount: newBalance,
         })
         return response.data
      }
   }
}
