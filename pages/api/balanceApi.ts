import { apiConfig } from './index'

export const fetchBalance = async () => {
   const response = await apiConfig.get('balance')
   return response.data
}

export const addBalance = async (amount: number) => {
   const existingBalance = await apiConfig.get('balance')

   if (existingBalance.status === 200) {
      const newBalance = existingBalance.data?.amount + amount
      const response = await apiConfig.patch('balance', { amount: newBalance })
      return response.data
   }
}
