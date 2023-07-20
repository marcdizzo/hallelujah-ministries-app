import React from 'react'
import { Outlet } from 'react-router-dom'
import NavHeader from './NavHeader'
import Sidebar from './Sidebar'

const AdminLayout = () => {
  return (
    <div>
        <NavHeader />
        <Outlet />
        <Sidebar />
    </div>
  )
}

export default AdminLayout