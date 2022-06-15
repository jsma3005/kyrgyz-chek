import axios from 'axios'
import React from 'react'

interface Category {
  id: string
  title: string
  img: string
}

export const useCategories = () => {
  const [categories, setCategories] = React.useState<null | Category[]>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const get = React.useCallback(() => {

    setIsLoading(true)

    axios
      .get('https://kyrgyz-chek-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json')
      .then(res => {
        const data = res.data

        const list = Object.entries(data)
          .map(([key, val]: any) => {
            return {
              ...val,
              id: key,
            }
          })

        setCategories(list)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [])

  React.useEffect(() => {
    get()
  }, [get])


  return {
    categories,
    isLoading,
  }
}