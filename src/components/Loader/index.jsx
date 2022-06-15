import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Center
      w="100%"
      h="70vh"
      display="flex"
      justify="center"
      align="center"
    >
      <Spinner
        color="#c22088"
        emptyColor="gray.200"
        size="xl"
        thickness="4px"
      />
    </Center>
  )
}

export default Loader