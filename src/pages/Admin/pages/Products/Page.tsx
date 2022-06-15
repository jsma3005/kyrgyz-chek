import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Products } from '.'
import Card from '../../../../components/Card'
import Loader from '../../../../components/Loader'
import { PageTitle } from '../../../../components/PageTitle'
import { ProductsTypes } from './types'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { storage } from '../../../../configs/firebase'

const required = 'Обязательное поле'

export const Page = () => {
  const {
    goBack,
    loading,
    product,
    loadingPatch,
    patch,
    id,
    loadingDelete,
    remove,
  } = Products.Hooks.Page.use()

  const [loadingBtn, setLoadingBtn] = React.useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset,
  } = useForm<ProductsTypes.Form>()

  const onSubmit = React.useCallback((data: ProductsTypes.Form) => {
    if (typeof data.img === 'string') return patch(data)

    const file: any = data.img[0]

    const storageRef = ref(storage, `/products/${id}/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    setLoadingBtn(true)
    uploadTask.on(
      'state_changed',
      (snap: any) => {
        console.log(snap)
      },
      err => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => {
            patch({
              ...data,
              img: url,
            })
          })
          .finally(() => setLoadingBtn(false))
      },
    )
  }, [patch, id])

  React.useEffect(() => {
    if (!product) return

    reset({
      code: product.code,
      price: product.price,
      title: product.title,
      img: product.img,
    })
  }, [product, reset])

  if (loading) return <Loader />

  return (
    <Box p={3}>
      <PageTitle
        title="Продукт"
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

        <Box
          width="20%"
        >
          <img
            src={product?.img}
            alt="Product image"
          />
        </Box>

        <FormControl isInvalid={!!errors.img} mt={3}>
          <FormLabel
            color="#fff"
          >Заменить фото</FormLabel>
          <Input
            pt={1}
            color="#fff"
            type="file"
            _focus={{
              outline: 'none',
            }}
            {...register('img')}
          />
          <FormErrorMessage color="#fff">{errors.img && errors.img.message}</FormErrorMessage>
        </FormControl>

        <Button
          mt={5}
          mr={5}
          onClick={handleSubmit(onSubmit)}
          isLoading={loadingPatch || loadingBtn}
        >Отправить</Button>

        <Button
          colorScheme="red"
          mt={5}
          isLoading={loadingDelete}
          onClick={remove}
        >Удалить</Button>
      </Card>
    </Box>
  )
}