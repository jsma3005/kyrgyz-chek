import axios from 'axios'
import { ProductsTypes } from '../types'

export const post = (data: ProductsTypes.Form, id: string) => {
  return axios.post(`/categories/${id}/products.json`, data)
}