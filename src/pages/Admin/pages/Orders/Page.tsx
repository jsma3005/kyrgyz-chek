import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { PageTitle } from '../../../../components/PageTitle'
import { Orders } from '.'
import cls from './Page.module.scss'
import Loader from '../../../../components/Loader'

interface Props {
  title: string
  value: string
}

const InfoCard = ({ title, value }: Props) => {
  return (
    <Flex
      justify="space-between"
      mb={3}
      p={3}
      borderRadius={6}
      bg="#7B8CDE"
      color="#fff"
    >
      <Box>{title}</Box>
      <Box>{value}</Box>
    </Flex>
  )
}

export const Page = () => {
  const {
    isLoading,
    order,
    total,
  } = Orders.Hooks.Page.use()

  if (isLoading) return <Loader />

  return (
    <Box p={3}>
      <PageTitle
        title="Заказ"
      />

      {
        !order && <Text textAlign="center">Ничего не найдено!</Text>
      }

      {
        order && (
          <>
            <Box
              py={3}
            >
              <InfoCard title="ФИО" value={order.fio} />
              <InfoCard title="Почта" value={order.email} />
              <InfoCard title="Номер телефона" value={order.number} />
            </Box>
          </>
        )
      }

      <div className={cls.products}>
        {
          order?.carts.map(product => (
            <div
              key={product.id}
              className={cls.product}
            >
              <img
                src={product.img}
                alt={product.title}
              />

              <hr />

              <p>{product.title}</p>

              <h2>{product.price}</h2>

              <div className={cls.code}>
                Код товара: {product.code}
              </div>

              <hr />

              <div className={cls.amount}>
                Количество: {product.amount}
              </div>
            </div>
          ))
        }
      </div>

      <div>
        <Text
          size="4xl"
          fontWeight="bold"
          textAlign="center"
          mt={3}
        >Общая стоимость: {total} сомов</Text>
      </div>
    </Box>
  )
}
