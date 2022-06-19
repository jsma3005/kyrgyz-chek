import React from 'react'
import { useParams } from 'react-router-dom'
import { Orders } from '..'
import { OrdersTypes } from '../types'

const usePage = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [order, setOrder] = React.useState<null | OrdersTypes.Raw>(null)
  const [total, setTotal] = React.useState<number>(0)
  const { id } = useParams()

  const get = React.useCallback((id: string) => {
    const request = Orders.API.Page.get(id)

    setIsLoading(true)
    request
      .then(res => {
        const data = res.data

        if (data) {
          setOrder(data)

          const totalSum = data.carts.reduce((prev: any, current: any) => {
            return prev + (parseInt(current.price.match(/\d+/)) * current.amount)
          }, 0)

          setTotal(totalSum)
        }


      })
      .finally(() => setIsLoading(false))
  }, [])

  React.useEffect(() => {
    if (id) get(id)
  }, [id, get])

  return {
    isLoading,
    order,
    total,
  }
}

export const use = usePage
