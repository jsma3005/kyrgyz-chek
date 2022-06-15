import React from 'react'
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { PageTitle } from '../../../../components/PageTitle'
import cls from './List.module.scss'
import Card from '../../../../components/Card'
import { Catalog } from '.'
import Loader from '../../../../components/Loader'
import { useNavigate } from 'react-router-dom'

export const List = () => {
  const { categories, isLoading } = Catalog.Hooks.List.use()
  const navigate = useNavigate()

  if (isLoading) return <Loader />

  return (
    <Box
      p={3}
    >
      <PageTitle
        title="Список категорий"
      />

      <div className={cls.root}>
        <Card>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="white">Название категорий</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  categories?.map(item => (
                    <Tr
                      onClick={() => navigate(`/admin/products/${item.id}`)}
                      key={item.id}
                      _hover={{
                        border: '1px solid #fff',
                        cursor: 'pointer',
                      }}
                    >
                      <Td color="white">{item.title}</Td>
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </div>


    </Box>
  )
}