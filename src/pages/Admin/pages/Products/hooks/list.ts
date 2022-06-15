import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Products } from '..'
import { firebaseJSONParser } from '../../../../../tools'
import { ProductsTypes } from '../types'

const useList = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [loading, setLoading] = React.useState<boolean>(false)
  const [products, setProducts] = React.useState<ProductsTypes.Form[] | null>(null)

  const get = React.useCallback((id: string) => {
    const request = Products.API.List.get(id)

    setLoading(true)
    request
      .then(res => {
        const data = res.data
        if (data.products) {
          setProducts(firebaseJSONParser(data.products))
        }
      })
      .finally(() => setLoading(false))
  }, [])

  React.useEffect(() => {
    if (id) get(id)
  }, [id, get])

  const goCreate = () => navigate(`/admin/products/${id}/create`)
  const goBack = () => navigate('/admin/catalog')
  const goPage = (productId: string | undefined) => navigate(`/admin/products/${id}/${productId}`)

  return {
    id,
    goCreate,
    goBack,
    goPage,
    loading,
    products,
  }
}

export const use = useList