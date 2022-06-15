import axios from 'axios'
import { apiUrl } from '../../../../../configs'
import { ProductsTypes } from '../types'

interface GetProps {
  categoryId: string
  productId: string
}

export const get = ({
  categoryId,
  productId,
}: GetProps) => {
  return axios.get(`${apiUrl}/categories/${categoryId}/products/${productId}.json`)
}

export const patch = ({
  categoryId,
  productId,
  data,
}: GetProps & { data: ProductsTypes.Form }) => {
  return axios.patch(`${apiUrl}/categories/${categoryId}/products/${productId}.json`, data)
}

export const remove = ({
  categoryId,
  productId,
}: GetProps) => {
  return axios.delete(`${apiUrl}/categories/${categoryId}/products/${productId}.json`)
}