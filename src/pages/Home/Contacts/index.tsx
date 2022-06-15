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
            <a href="tel:0771234567">+996 (771) 23-45-67</a>
          </p>
          <p>
            <a href="mailto:example@gmail.com">example@gmail.com</a>
          </p>
          <p>
            г. Москва, Газетный переулок, 15
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.5445706212436!2d72.79312311545928!3d40.529556429352155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac05225c2cfd%3A0x16bd460bd75f22ab!2sOsh%20State%20University!5e0!3m2!1sen!2skg!4v1654805187662!5m2!1sen!2skg"
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