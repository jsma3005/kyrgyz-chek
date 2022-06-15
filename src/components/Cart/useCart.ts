import axios from 'axios'
import React from 'react'
import { apiUrl } from '../../configs'

const postRequest = (data: any) => {
  return axios.post(`${apiUrl}/orders.json`, data)
}

export const useCart = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const post = React.useCallback((data: any) => {
    const request = postRequest(data)

    setIsLoading(true)
    return request
      .then(res => {
        const data = res.data

        console.log(data)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return {
    post,
    isLoading,
  }
}