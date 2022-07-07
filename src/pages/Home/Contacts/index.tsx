import React from 'react'
import { Title } from '../../../components/Title'
import cls from './index.module.scss'
import { FaInstagramSquare, FaWhatsappSquare, FaTelegram } from 'react-icons/fa'

export const Contacts = () => {
  return (
    <div className={cls.root} id="contacts">
      <Title title="Контакты" />
      <div className={cls.container}>
        <div className={cls.contacts}>
          <p>
            <a href="tel:0771234567">+996 (770) 36-41-97</a>
          </p>
          <p>
            <a href="mailto:example@gmail.com">stroymag@gmail.com</a>
          </p>
          <p>
            г. Ош, Ленина
          </p>

          <p>​<strong>Мы в соц. сетях:</strong></p>

          <div className={cls.icons}>
            <a href="#"><FaInstagramSquare /></a>
            <a href="#"><FaWhatsappSquare /></a>
            <a href="#"><FaTelegram /></a>
          </div>

        </div>

        <div className={cls.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.0888572502176!2d72.78849731545962!3d40.539625979351094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6ab19611db1f338!2zNDDCsDMyJzIyLjciTiA3MsKwNDcnMjYuNSJF!5e0!3m2!1sru!2skg!4v1657187362008!5m2!1sru!2skg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}