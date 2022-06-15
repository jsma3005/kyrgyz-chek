import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Products } from '..'
import { ProductsTypes } from '../types'

interface GetProps {
  categoryId: string
  productId: string
}

const usePage = () => {
  const navigate = useNavigate()
  const { id, productId } = useParams() as { id: string, productId: string }

  const [product, setProduct] = React.useState<null | ProductsTypes.Form>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [loadingPatch, setLoadingPatch] = React.useState<boolean>(false)
  const [loadingDelete, setLoadingDelete] = React.useState<boolean>(false)

  const get = React.useCallback(({
    categoryId,
    productId,
  }: GetProps) => {
    const request = Products.API.Page.get({
      categoryId,
      productId,
    })

    setLoading(true)
    request
      .then(res => {
        const data = res.data
        setProduct(data)
      })
      .finally(() => setLoading(false))
  }, [])

  const remove = React.useCallback(() => {
    const request = Products.API.Page.remove({
      categoryId: id,
      productId,
    })

    setLoadingDelete(true)
    request
      .then(() => {
        navigate(`/admin/products/${id}`)
      })
      .finally(() => setLoadingDelete(false))
  }, [id, productId, navigate])

  const patch = React.useCallback((data: ProductsTypes.Form) => {
    const request = Products.API.Page.patch({
      categoryId: id,
      productId,
      data,
    })

    setLoadingPatch(true)
    request
      .then(() => {
        navigate(`/admin/products/${id}`)
      })
      .finally(() => setLoadingPatch(false))
  }, [id, productId, navigate])

  const goBack = () => navigate(`/admin/products/${id}`)

  React.useEffect(() => {
    get({
      categoryId: id,
      productId,
    })
  }, [get, id, productId])

  return {
    goBack,
    patch,
    remove,
    id,
    loadingPatch,
    product,
    loading,
    loadingDelete,
  }
}

export const use = usePage