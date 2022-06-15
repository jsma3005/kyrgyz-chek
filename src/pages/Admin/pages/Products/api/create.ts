import axios from 'axios'
import { apiUrl } from '../../../../../configs'
import { ProductsTypes } from '../types'

export const post = (data: ProductsTypes.Form, id: string) => {
  return axios.post(`${apiUrl}/categories/${id}/products.json`, data)
}