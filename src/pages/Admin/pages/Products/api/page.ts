import axios from 'axios'
import { ProductsTypes } from '../types'

interface GetProps {
  categoryId: string
  productId: string
}

export const get = ({
  categoryId,
  productId,
}: GetProps) => {
  return axios.get(`/categories/${categoryId}/products/${productId}.json`)
}

export const patch = ({
  categoryId,
  productId,
  data,
}: GetProps & { data: ProductsTypes.Form }) => {
  return axios.patch(`/categories/${categoryId}/products/${productId}.json`, data)
}

export const remove = ({
  categoryId,
  productId,
}: GetProps) => {
  return axios.delete(`/categories/${categoryId}/products/${productId}.json`)
}