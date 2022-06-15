import { Box } from '@chakra-ui/react'
import React from 'react'
import cls from './Card.module.scss'

const colorsBg = {
  main: '#c22088',
  light:  '#efefef',
  dark: '#000000',
}

type ColorsBg = keyof typeof colorsBg

type MarginType = string | number

interface PropsTypes {
  children: React.ReactNode
  bg?: ColorsBg
  className?: string
  m?: MarginType
  mt?: MarginType
  mb?: MarginType
  ml?: MarginType
  mr?: MarginType
}

const Card = ({
  children,
  bg = 'main',
  className,
  m,
  mt,
  mb,
  ml,
  mr,
}: PropsTypes) => {
  return (
    <Box
      className={`${cls.root} ${className}`}
      style={{
        backgroundColor: colorsBg[bg],
        margin: m,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      {children}
    </Box>
  )
}

export default Card