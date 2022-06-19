import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Orders } from '..'
import { firebaseJSONParser } from '../../../../../tools'
import { OrdersTypes } from '../types'

const useList = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [cartList, setCartList] = React.useState<OrdersTypes.Raw[] | null>(null)

  const navigate = useNavigate()

  const get = React.useCallback(() => {
    const request = Orders.API.List.get()

    setIsLoading(true)
    request
      .then(res => {
        const data = res.data

        setCartList(firebaseJSONParser(data))
      })
      .finally(() => setIsLoading(false))
  }, [])

  const goPage = (id: string) => navigate(`/admin/orders/${id}`)

  React.useEffect(get, [get])

  return {
    isLoading,
    cartList,
    goPage,
  }
}

export const use = useList
