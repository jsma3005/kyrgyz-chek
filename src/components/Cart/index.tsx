import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import cls from './index.module.scss'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text, Box, FormControl, FormLabel, Input, FormErrorMessage, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useCart } from './useCart'

const EmptyCart = () => {
  return (
    <Text
      textAlign="center"
      fontSize="2xl"
    >Корзина пуста!</Text>
  )
}

const CartProducts = () => {
  const carts = JSON.parse(localStorage.getItem('carts') as any)

  return (
    <Box
      display="flex"
      height="300px"
      overflow="auto"
      flexWrap="wrap"
    >
      {
        carts.length !== 0 && (
          carts.map((item: any) => (
            <Box
              key={item.id}
              width="23%"
              height="fit-content"
              margin="0 .5%"
              mb={3}
              border="1px solid #dfdee2"
              p={4}
            >
              <img
                src={item.img}
                style={{
                  height: '200px',
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
              <hr className={cls.divider} />
              <Text
                textAlign="center"
                fontSize="sm"
              >{item.title}</Text>
            </Box>
          ))
        )
      }
    </Box>
  )
}

const CartForm = () => {
  const required = 'Обязательное поле'
  const { isLoading, post } = useCart()
  const toast = useToast()

  interface Form {
    fio: string
    email: string
    number: string
  }

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<Form>()

  const onSubmit = React.useCallback((data: Form) => {
    const carts = JSON.parse(localStorage.getItem('carts') as any)

    const newData = {
      ...data,
      carts,
    }

    post(newData)
      .then(() => {
        localStorage.setItem('carts', JSON.stringify([]))

        toast({
          title: 'Успешно отправлено',
          position: 'top',
          duration: 2000,
          status: 'success',
        })
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      })
  }, [post, toast])

  return (
    <Box py={3}>
      <FormControl mt={3} isInvalid={!!errors.fio}>
        <FormLabel>ФИО</FormLabel>
        <Input
          type="text"
          placeholder="ФИО"
          {...register('fio', { required })}
        />
        <FormErrorMessage>{errors.fio && errors.fio.message}</FormErrorMessage>
      </FormControl>

      <FormControl mt={3} isInvalid={!!errors.number}>
        <FormLabel>Номер телефона</FormLabel>
        <Input
          type="text"
          placeholder="Номер телефона"
          {...register('number', { required })}
        />
        <FormErrorMessage>{errors.number && errors.number.message}</FormErrorMessage>
      </FormControl>

      <FormControl mt={3} isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          {...register('email', { required })}
        />
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
      </FormControl>

      <Button
        variant="solid"
        colorScheme="green"
        mt={3}
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading}
      >Оформить</Button>
    </Box>
  )
}

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const carts = JSON.parse(localStorage.getItem('carts') as any)

  const resetCart = () => {
    localStorage.setItem('carts', JSON.stringify([]))
    window.location.reload()
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={
          !carts.length ? 'md' : '6xl'
        }
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Корзина</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              !carts.length
                ? <EmptyCart />
                : (
                  <>
                    <CartProducts />
                    <CartForm />
                  </>
                )
            }
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={resetCart}
              size="sm"
            >
              Очистить корзину
            </Button>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
              size="sm"
            >
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div
        className={cls.cart}
        onClick={onOpen}
      >
        <ShoppingBagIcon />
      </div>
    </>
  )
}