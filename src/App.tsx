import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Interceptor } from './configs'
import { AdminLayout } from './pages/Admin/AdminLayout'
import { AuthPage } from './pages/Auth'
import Main from './pages/Home'
import Catalog from './pages/Catalog'

Interceptor.initBaseURL()

const App = () => {

  React.useEffect(() => {
    const carts = JSON.parse(localStorage.getItem('carts') as any)

    if (!carts) {
      localStorage.setItem('carts', JSON.stringify([]))
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog/:id" element={<Catalog />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  )
}

export default App