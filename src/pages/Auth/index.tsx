import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  FormControl,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { UserIcon } from '@heroicons/react/outline'
import { useForm } from 'react-hook-form'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'

interface AuthTypes {
  alias: string
  password: string
}

export const AuthPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthTypes>()

  const navigate = useNavigate()

  const [error, setError] = React.useState('')

  const onSubmit = React.useCallback((data: AuthTypes) => {
    if (data.alias === 'admin' && data.password === 'admin') {
      localStorage.setItem('isAuth', '1')
      navigate('/admin')
      setError('')
    } else {
      setError('Неправльный логин или пароль')
    }
  }, [navigate])

  return (
    <Flex
      w="100%"
      h="100vh"
      backgroundColor="gray.200"
      justify="center"
      align="center"
      padding={'.5rem'}
    >
      <Box minW={{ base: '90%', md: '468px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            shadow="md"
          >
            {
              error && (
                <Text
                  textAlign="center"
                  color="red"
                >{error}</Text>
              )
            }
            <FormControl isInvalid={!!errors.alias}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                >
                  <UserIcon
                    width={30}
                    height={25}
                  />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Логин"
                  {...register('alias')}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.alias && errors.alias.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <InputGroup >
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                >
                  <LockClosedIcon
                    width={30}
                    height={25}
                  />
                </InputLeftElement>
                <Input
                  type={'password'}
                  placeholder="Пароль"
                  id="password"
                  paddingRight="6rem"
                  {...register('password')}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              backgroundColor="#c22088"
              color="white"
              width="full"
            >
              Авторизоваться
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  )
}
