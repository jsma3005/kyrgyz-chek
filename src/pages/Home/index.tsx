import React from 'react'
import { About } from './About'
import Catalog from './Catalog'
import { Contacts } from './Contacts'
import { Delivery } from './Delivery'
import Head from './Head'

const Main = () => {
  return (
    <div>
      <Head />
      <Catalog />
      <About />
      <Delivery />
      <Contacts />
    </div>
  )
}

export default Main