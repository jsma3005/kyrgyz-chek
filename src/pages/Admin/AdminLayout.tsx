import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { MrDrawer } from '../../components/MrDrawer'
import cls from './index.module.scss'
import { List } from './pages/Catalog/List'
import { Products } from './pages/Products'

interface Nav {
  id: number
  title: string
  to: string
}

const activeClassName = cls.activeNavLink

const navs: Nav[] = [
  {
    id: 1,
    title: 'Каталог',
    to: '/admin/catalog',
  },
]

export const AdminLayout = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth !== '1') return <Navigate to="/auth" />

  return (
    <div>
      <MrDrawer title="Администратор">
        {
          props => (
            <div className={cls.drawer}>
              {
                navs.map(({ id, title, to }) => (
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? activeClassName : cls.navLink
                    }}
                    key={id}
                    to={to}
                    onClick={props.onClose}
                  >{title}</NavLink>
                ))
              }
            </div>
          )
        }
      </MrDrawer>
      <Routes>
        <Route path="/catalog" element={<List />} />
        <Route path="/products/:id" element={<Products.Pages.List />} />
        <Route path="/products/:id/create" element={<Products.Pages.Create />} />
        <Route path="/products/:id/:productId" element={<Products.Pages.Page />} />
      </Routes>
    </div>
  )
}