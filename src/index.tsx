import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>,
)
