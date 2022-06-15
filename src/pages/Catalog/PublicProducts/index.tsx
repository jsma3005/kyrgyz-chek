import React from 'react'
import Loader from '../../../components/Loader'
import { usePublicProducts } from './usePublicProducts'
import cls from './index.module.scss'
import { Button, FormControl, FormLabel, Input, Menu, MenuButton, MenuList } from '@chakra-ui/react'

interface Cart {
  title: string
  img: string
  id?: string
  code: string
  price: string
  amount?: number
}

export const PublicProducts = () => {
  const {
    loading,
    products,
    amount,
    setAmount,
  } = usePublicProducts()

  const addToCart = (product: Cart, amount: number) => {
    const data = {
      ...product,
      amount,
    }
    setAmount(1)

    const carts = JSON.parse(localStorage.getItem('carts') as any)

    localStorage.setItem('carts', JSON.stringify([...carts, data]))

    window.location.reload()
  }

  const removeCart = (product: any) => {
    const newCarts = carts.filter((item: any) => item.id !== product.id)

    localStorage.setItem('carts', JSON.stringify(newCarts))

    window.location.reload()
  }

  const carts = JSON.parse(localStorage.getItem('carts') as any)

  if (loading) return <Loader />

  return (
    <div className={cls.root}>
      {
        products?.map(product => (
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

            <hr />

            <h2>{product.price}</h2>

            <div className={cls.code}>
              Код товара: {product.code}
            </div>

            <div className={cls.cartBtn}>
              {
                carts.find((item: any) => item.id === product.id) ? (
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => removeCart(product)}
                  >Удалить из корзины</Button>
                ) : (
                  <Menu>
                    {({ onClose }) => (
                      <>
                        <MenuButton
                          as={Button}
                          size="sm"
                          width="100%"
                          colorScheme="purple"
                        >
                          В корзину
                        </MenuButton>
                        <MenuList
                          p={4}
                        >
                          <FormControl>
                            <FormLabel textAlign="center">Кол-во</FormLabel>
                            <Input
                              type="number"
                              placeholder="Кол-во"
                              size="sm"
                              defaultValue={amount}
                              onChange={(e) => setAmount(+e.currentTarget.value)}
                            />
                          </FormControl>
                          <Button
                            mt={3}
                            size="sm"
                            onClick={() => {
                              addToCart(product, amount)
                              onClose()
                            }}
                          >Добавить</Button>
                        </MenuList>
                      </>
                    )}

                  </Menu>

                )
              }

            </div>

          </div>
        ))
      }
    </div>
  )
}