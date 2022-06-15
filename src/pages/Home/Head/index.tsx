import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cls from './index.module.scss'
import { HashLink } from 'react-router-hash-link'

interface Nav {
  id: number
  title: string
  to: string
}

export const navs: Nav[] = [
  {
    id: 1,
    title: 'О нас',
    to: '/#about',
  },
  {
    id: 2,
    title: 'Каталог',
    to: '/#catalog',
  },
  {
    id: 3,
    title: 'Доставка и оплата',
    to: '/#delivery',
  },
  {
    id: 4,
    title: 'Контакты',
    to: '/#contacts',
  },
]

const Head = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.root}>
      <div className={cls.bannerContent}>
        <div className={cls.logo}>
          <h1 onClick={() => navigate('/')}>
            <span>Кыргыз</span>Чек
          </h1>
        </div>

        <div className={cls.nav}>
          <ul>
            {
              navs.map(({ id, title, to }) => (
                <li key={id}>
                  <HashLink to={to}>{title}</HashLink>
                </li>
              ))
            }
          </ul>
        </div>

        <div className={cls.title}>
          <h1>Магазин строительных и хозяйственных товаров</h1>
        </div>

        <div className={cls.goCatalog}>
          <Link to={'/#catalog'}>В каталог</Link>
        </div>
      </div>

      <div
        className={cls.bannerImg}
      >
        <img src="/img/banner5.jpeg" alt="banner" />
      </div>
    </div>
  )
}

export default Head
