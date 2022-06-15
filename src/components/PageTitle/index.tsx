import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { PlusCircleIcon, ArrowCircleLeftIcon } from '@heroicons/react/outline'

interface Props {
  title: string
  withPlus?: boolean
  onPlus?: () => void
  withBack?: boolean
  onBack?: () => void
}

export const PageTitle = ({
  title,
  withPlus = false,
  onPlus,
  withBack = false,
  onBack,
}: Props) => {
  return (
    <Box
      bg={'#c22088'}
      padding={'1rem'}
      borderRadius={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
      >
        {
          withBack && (
            <ArrowCircleLeftIcon
              onClick={onBack}
              width={40}
              height={40}
              cursor="pointer"
              color="#fff"
            />
          )
        }
        <Text
          color={'#efefef'}
          fontSize={'2xl'}
          ml={3}
        >{title}</Text>
      </Box>
      {
        withPlus && (
          <PlusCircleIcon
            onClick={onPlus}
            width={40}
            height={40}
            cursor="pointer"
            color="#fff"
          />
        )
      }
    </Box>
  )
}