import axios from 'axios'

export const apiConfig = axios.create({
   baseURL: 'http://localhost:3001',
   timeout: 3000,
   headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
   },
})
