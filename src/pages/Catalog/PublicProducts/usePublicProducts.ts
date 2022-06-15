import React from 'react'
import { useParams } from 'react-router-dom'
import { firebaseJSONParser } from '../../../tools'
import { PublicProductsAPI } from './api'

export interface ProductRaw {
  title: string
  price: string
  code: string
  img: string
  id?: string
}


export const usePublicProducts = () => {
  const { id } = useParams()
  const [products, setProducts] = React.useState<null | ProductRaw[]>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [amount, setAmount] = React.useState<number>(1)

  const get = React.useCallback((id: string) => {
    const request = PublicProductsAPI.get(id)

    setLoading(true)
    request
      .then(res => {
        const data = res.data

        setProducts(firebaseJSONParser(data))
      })
      .finally(() => setLoading(false))
  }, [])

  React.useEffect(() => {
    if (id) get(id)
  }, [id, get])

  return {
    amount,
    setAmount,
    loading,
    products,
  }
}