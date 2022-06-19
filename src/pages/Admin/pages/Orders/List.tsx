import React from 'react'

import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'

import { Orders } from '.'
import { PageTitle } from '../../../../components/PageTitle'
import Loader from '../../../../components/Loader'
import Card from '../../../../components/Card'

export const List = () => {
  const {
    isLoading,
    cartList,
    goPage,
  } = Orders.Hooks.List.use()

  if (isLoading) return <Loader />

  return (
    <Box p={3}>
      <PageTitle
        title="Список заказов"
      />

      {
        !cartList?.length && <Text textAlign="center">Список заказов пуст!</Text>
      }

      {
        cartList?.length && (
          <Card mt=".5rem">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th color="#fff">ФИО</Th>
                    <Th color="#fff">Почта</Th>
                    <Th color="#fff">Номер телефона</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    cartList?.map(item => (
                      <Tr
                        color="#fff"
                        key={item.id}
                        cursor="pointer"
                        _hover={{
                          border: '1px solid #fff',
                        }}
                        onClick={() => goPage(item.id)}
                      >
                        <Td>{item.fio}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.number}</Td>
                      </Tr>
                    ))
                  }
                </Tbody>
              </Table>
            </TableContainer>
          </Card>
        )
      }




    </Box>
  )
}