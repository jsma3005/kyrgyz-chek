import React from 'react'
import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { PageTitle } from '../../../../components/PageTitle'
import { Products } from '.'
import Loader from '../../../../components/Loader'
import Card from '../../../../components/Card'

export const List = () => {
  const {
    goCreate,
    loading,
    products,
    goBack,
    goPage,
  } = Products.Hooks.List.use()

  if (loading) return <Loader />

  return (
    <Box
      p={3}
    >
      <PageTitle
        title="Список продуктов"
        withPlus
        withBack
        onBack={goBack}
        onPlus={goCreate}
      />

      {
        !products?.length && (
          <Text
            textAlign="center"
            fontSize="lg"
            mt={3}
          >Список продуктов пуст</Text>
        )
      }

      {
        products?.length && (
          <Card mt=".5rem">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th color="#fff">Название</Th>
                    <Th color="#fff">Цена</Th>
                    <Th color="#fff">Код</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    products.map(item => (
                      <Tr
                        color="#fff"
                        key={item.id}
                        cursor="pointer"
                        _hover={{
                          border: '1px solid #fff',
                        }}
                        onClick={() => goPage(item.id)}
                      >
                        <Td>{item.title}</Td>
                        <Td>{item.price}</Td>
                        <Td>{item.code}</Td>
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