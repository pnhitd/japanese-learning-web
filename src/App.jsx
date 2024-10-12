import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardPage from './pages/DashboardPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SearchingPage from './pages/SearchingPage'
import ChattingPage from './pages/ChattingPage'
import HomePage from './pages/HomePage'
import FreeDocumentPage from './pages/FreeResourcesPage'
import PaidDocumentPage from './pages/PaidResourcesPage'
import OnlineCoursesPage from './pages/OnlineCoursesPage'
import BlogPage from './pages/BlogPage'
import AccountPage from './pages/AccountPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout><HomePage /></MainLayout>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/dashboard' element={<MainLayout><DashboardPage /></MainLayout>} />
        <Route path='/search' element={<MainLayout><SearchingPage /></MainLayout>} />
        <Route path='/free-resources' element={<MainLayout><FreeDocumentPage /></MainLayout>} />
        <Route path='/paid-resources' element={<MainLayout><PaidDocumentPage /></MainLayout>} />
        <Route path='/online-courses' element={<MainLayout><OnlineCoursesPage /></MainLayout>} />
        <Route path='/blog' element={<MainLayout><BlogPage /></MainLayout>} />
        <Route path='/chat' element={<MainLayout><ChattingPage /></MainLayout>} />,
        <Route path='/account' element={<MainLayout><AccountPage /></MainLayout>} />
        <Route path='*' element='Home Page' />
      </Routes>
    </>
  )
}

export default App
