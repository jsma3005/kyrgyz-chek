import React from 'react'
import Loader from '../../../components/Loader'
import { Title } from '../../../components/Title'
import { useCatalog } from './hook'
import cls from './index.module.scss'

const Catalog = () => {
  const {
    categories,
    isLoading,
    goCategory,
  } = useCatalog()

  return (
    <div className={cls.root} id="catalog">
      <Title title="Каталог" />

      {
        isLoading && <Loader />
      }

      {
        !isLoading && (
          <div className={cls.catalog}>
            {
              categories?.map(({ id, img, title }) => (
                <div
                  key={id}
                  className={cls.card}
                  onClick={() => goCategory(id)}
                >
                  <img src={img} alt={title} />
                  <h1>{title}</h1>
                </div>
              ))
            }
          </div>
        )
      }


    </div>
  )
}

export default Catalog