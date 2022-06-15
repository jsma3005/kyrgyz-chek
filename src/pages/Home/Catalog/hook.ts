import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Category {
  id: string
  title: string
  img: string
}

export const useCatalog = () => {
  const [categories, setCategories] = React.useState<Category[] | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean | null>(null)

  const navigate = useNavigate()

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

  const goCategory = (id: string) => navigate(`/catalog/${id}`)

  React.useEffect(() => {
    get()
  }, [get])

  return {
    goCategory,
    isLoading,
    categories,
  }
}