import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Products } from '..'
import { ProductsTypes } from '../types'

const useCreate = () => {
  const { id } = useParams() as { id: string }
  const navigate = useNavigate()

  const post = React.useCallback((data: ProductsTypes.Form) => {
    const request = Products.API.Create.post(data, id)

    request
      .then(res => {
        console.log(res)
      })

    return request
  }, [id])

  const goProductsList = () => navigate(`/admin/products/${id}`)
  const goBack = () => navigate(`/admin/products/${id}`)

  return {
    id,
    post,
    goProductsList,
    goBack,
  }
}

export const use = useCreate