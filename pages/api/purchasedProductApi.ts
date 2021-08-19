import { apiConfig } from './index'

export const fetchPurchasedProduct = async () => {
   const response = await apiConfig.get('/purchasedproducts')
   return response.data
}

export const buyProduct = async (product: IProduct) => {
   const productToPurchase: IPurchasedProductS = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
   }

   const response = await apiConfig.post(
      '/purchasedproducts',
      productToPurchase
   )

   if (response.status === 201) {
      product.quantity = product.quantity - 1
      const response = await apiConfig.put(`/products/${product.id}`, product)

      const existingBalance = await apiConfig.get('/balance')

      if (existingBalance.status === 200) {
         const newBalance = existingBalance.data?.amount - product.price
         const response = await apiConfig.patch('balance', {
            amount: newBalance,
         })
         return response.data
      }
   }
}
