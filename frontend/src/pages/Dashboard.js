import React from 'react'
import './CSS/Dashboard.css'
import MyAccount from '../components/dashboard/MyAccount'
import Sidebar from '../components/dashboard/Sidebar'
import { Route, Routes } from 'react-router-dom'
import LoginSignup from './Loginsignup'

const Dashboard = () => {
  return (
    <div className='dashboard'>
    <Sidebar />
      <MyAccount />
      {/* <Routes>
        <Route path='/loginsignup' element={<LoginSignup />}></Route>
        <Route path='/bank' element={<MyAccount />}></Route>
      </Routes> */}
    </div>
  )
}

export default Dashboard
