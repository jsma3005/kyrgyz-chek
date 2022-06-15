import React from 'react'
import { Catalog } from '..'
import { firebaseJSONParser } from '../../../../../tools'
import { CatalogTypes } from '../types'

const useList = () => {
  const [categories, setCategories] = React.useState<CatalogTypes.Data[] | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const get = React.useCallback(() => {
    const request = Catalog.API.List.get()

    setIsLoading(true)
    request
      .then(res => {
        const data = res.data

        setCategories(firebaseJSONParser(data))
      })
      .finally(() => setIsLoading(false))
  }, [])

  React.useEffect(get, [get])

  return {
    isLoading,
    categories,
  }
}

export const use = useList