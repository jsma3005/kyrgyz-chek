import React from 'react'
import cls from './index.module.scss'

interface Props {
  title: string
}

export const Title = ({ title }: Props) => {
  return (
    <div className={cls.root}>
      <h1>{title}</h1>
      <span />
    </div>
  )
}