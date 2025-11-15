import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/admin/Dashboard'
import Quotation from './pages/admin/Quotation'
import Client from './pages/admin/Client'
import Templates from './pages/admin/Templates'
import User from './pages/admin/User'


function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-quotation" element={<Quotation />} />
          <Route path="/admin-client" element={<Client />} />
          <Route path="/admin-templates" element={<Templates />} />
          <Route path="/admin-user" element={<User />} />


        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
