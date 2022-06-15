import axios from 'axios'
import { apiUrl } from '../../../configs'

const get = (categoryId: string) => {
  return axios.get(`${apiUrl}/categories/${categoryId}/products.json`)
}

export const PublicProductsAPI = {
  get,
}