import React from 'react'
import { Title } from '../../../components/Title'
import cls from './index.module.scss'

export const About = () => {
  return (
    <div className={cls.root} id="about">
      <Title title="О нас" />
      <div className={cls.container}>
        <div
          style={{ background: 'url(\'img/banner1.jpeg\') center / cover' }}
          className={cls.picture}
        />

        <div className={cls.text}>
          <p>Сеть строительных магазинов Кыргыз-Чек в Кара-Суу
            Оптово-розничная торговая сеть «Кыргыз-Чек» Торговая сеть «Кыргыз-Чек» – перспективная компания Кыргызстана, специализирующаяся на поставках и продаже строительных товаров и товаров хозяйственного назначения.</p>

          <p>Торговая сеть «Кыргыз-Чек» была основана 3 июля 2016 года. На каждой точке у нас имеются хоз. маркеты, где вы можете приобрести отделочные материалы, такие как: отрезные круги, лакокрасочная продукция, электроды, сухие строительные смеси, инструменты и многое другое.</p>
        </div>
      </div>
    </div>
  )
}