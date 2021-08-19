import { apiConfig } from './index'

export const fetchProducts = async () => {
   const response = await apiConfig.get('products')
   return response.data
}
