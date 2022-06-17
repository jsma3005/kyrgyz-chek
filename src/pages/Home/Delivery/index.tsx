import React from 'react'
import { Title } from '../../../components/Title'
import cls from './index.module.scss'
import {
  TruckIcon,
  StarIcon,
  LocationMarkerIcon,
  CreditCardIcon,
  ThumbUpIcon,
  ClockIcon,
} from '@heroicons/react/outline'

interface Feautures {
  id: number
  title: string
  icon: JSX.Element
}

const feautures: Feautures[] = [
  {
    id: 1,
    title: 'Доставляем по всей стране и даже дальше',
    icon: <TruckIcon />,
  },
  {
    id: 2,
    title: 'Бесплатная доставка для заказов от 1500 сомов',
    icon: <StarIcon />,
  },
  {
    id: 3,
    title: 'Доставим до двери или оставим в постамате',
    icon: <LocationMarkerIcon />,
  },
  {
    id: 4,
    title: 'Оплатите ваш заказ картой или наличными',
    icon: <CreditCardIcon />,
  },
  {
    id: 5,
    title: 'У вас будет 60 дней гарантии на товар',
    icon: <ThumbUpIcon />,
  },
  {
    id: 6,
    title: 'Доставляем в кратчайшие сроки',
    icon: <ClockIcon />,
  },
]

export const Delivery = () => {
  return (
    <div className={cls.root} id="delivery">
      <Title title="Доставка и оплата" />

      <div className={cls.list}>
        {
          feautures.map(feat => (
            <div className={cls.card} key={feat.id}>
              <div>{feat.icon}</div>
              <h1>{feat.title}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}