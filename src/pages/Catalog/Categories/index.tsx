import React from 'react'
import { NavLink } from 'react-router-dom'
import Loader from '../../../components/Loader'
import cls from './index.module.scss'
import { useCategories } from './useCategories'

const Categories = () => {
  const { categories, isLoading } = useCategories()

  if (isLoading) return <Loader />

  return (
    <div className={cls.root}>
      <p>Категории</p>
      <hr />
      {
        categories?.map(item => (
          <NavLink
            key={item.id}
            to={`/catalog/${item.id}`}
            className={({ isActive }) => isActive ? cls.activeNavLink : ''}
          >{item.title}</NavLink>
        ))
      }
    </div>
  )
}

export default Categories