import React from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { PageTitle } from '../../../../components/PageTitle'
import Card from '../../../../components/Card'
import { useForm } from 'react-hook-form'
import { ProductsTypes } from './types'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { storage } from '../../../../configs/firebase'
import { Products } from '.'

const required = 'Обязательное поле'

export const Create = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<ProductsTypes.Form>()
  const [loading, setLoading] = React.useState<boolean>(false)

  const { post, id, goProductsList, goBack } = Products.Hooks.Create.use()

  const onSubmit = React.useCallback((data: ProductsTypes.Form) => {
    const file: any = data.img[0]

    const storageRef = ref(storage, `/products/${id}/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    setLoading(true)
    uploadTask.on(
      'state_changed',
      (snap: any) => {
        console.log(snap)
      },
      err => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => {
            post({
              ...data,
              img: url,
            })
              .finally(() => {
                setLoading(false)
                goProductsList()
              })
          })
      },
    )
  }, [post, id, goProductsList])

  return (
    <Box
      p={3}
    >
      <PageTitle
        title="Создание продуктов"
        withBack
        onBack={goBack}
      />

      <Card
        mt={'1rem'}
      >
        <FormControl mb={3} isInvalid={!!errors.title}>
          <FormLabel
            color="#fff"
          >Название продукта</FormLabel>
          <Input
            color="#fff"
            type="text"
            _focus={{
              outline: 'none',
            }}
            {...register('title', { required })}
          />
          <FormErrorMessage color="#fff">{errors.title && errors.title.message}</FormErrorMessage>
        </FormControl>

        <FormControl mb={3} isInvalid={!!errors.price}>
          <FormLabel
            color="#fff"
          >Цена продукта</FormLabel>
          <Input
            color="#fff"
            type="text"
            _focus={{
              outline: 'none',
            }}
            {...register('price', { required })}
          />
          <FormErrorMessage color="#fff">{errors.price && errors.price.message}</FormErrorMessage>
        </FormControl>

        <FormControl mb={3} isInvalid={!!errors.code}>
          <FormLabel
            color="#fff"
          >Код товара</FormLabel>
          <Input
            color="#fff"
            type="text"
            _focus={{
              outline: 'none',
            }}
            {...register('code', { required })}
          />
          <FormErrorMessage color="#fff">{errors.code && errors.code.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.img}>
          <FormLabel
            color="#fff"
          >Загрузить фото</FormLabel>
          <Input
            pt={1}
            color="#fff"
            type="file"
            _focus={{
              outline: 'none',
            }}
            {...register('img', { required })}
          />
          <FormErrorMessage color="#fff">{errors.img && errors.img.message}</FormErrorMessage>
        </FormControl>

        <Button
          mt={5}
          onClick={handleSubmit(onSubmit)}
          isLoading={loading}
        >Отправить</Button>
      </Card>
    </Box>
  )
}