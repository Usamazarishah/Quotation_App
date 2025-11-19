import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/admin/Dashboard'
import Quotation from './pages/admin/Quotation'
import Client from './pages/admin/Client'
import Templates from './pages/admin/Templates'
import User from './pages/admin/User'
import AdminProfile from './pages/admin/profile/AdminProfile'
import AdminSettings from './pages/admin/profile/AdminSettings'
import AdminNotification from './pages/admin/profile/AdminNotification'
import AdminFAQ from './pages/admin/profile/AdminFAQ'
import AdminAbout from './pages/admin/profile/AdminAbout'


function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-quotation" element={<Quotation />} />
          <Route path="/admin-client" element={<Client />} />
          <Route path="/admin-templates" element={<Templates />} />
          <Route path="/admin-user" element={<User />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
           <Route path="/admin-settings" element={<AdminSettings />} />
           <Route path="/admin-notifications" element={<AdminNotification />} />
           <Route path="/admin-faq" element={<AdminFAQ/>} />
           <Route path="/admin-about" element={<AdminAbout/>} />
           {/* <Route path="/admin-logout" element={<AdminProfile />} /> */}




        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App


const Root = () => {
  //check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem('token');

  // Redirect to dashboard if authenticated, otherwise to login 
  return isAuthenticated ? (
    <Navigate to='/dashboard' />
  ) : (
    <Navigate to='/login'/>
);
}