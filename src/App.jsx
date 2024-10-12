import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardPage from './pages/DashboardPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SearchingPage from './pages/SearchingPage'
import ChattingPage from './pages/ChattingPage'
import HomePage from './pages/HomePage'
import FreeDocumentPage from './pages/FreeResources/FreeResourcesPage'
import PaidDocumentPage from './pages/PaidResourcesPage'
import OnlineCoursesPage from './pages/OnlineCoursesPage'
import BlogPage from './pages/BlogPage'
import AccountPage from './pages/AccountPage'
import MainVocabPage from './pages/FreeResources/MainVocabPage'
import MainGrammarPage from './pages/FreeResources/MainGrammarPage'

function App() {
  return (
    <>
      <Routes>
        {/* Trang chủ */}
        <Route path='/' element={<MainLayout><HomePage /></MainLayout>} />

        {/* Trang đăng nhập và đăng ký */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />

        {/* Trang dashboard */}
        <Route path='/dashboard' element={<MainLayout><DashboardPage /></MainLayout>} />

        {/* Trang tìm kiếm */}
        <Route path='/search' element={<MainLayout><SearchingPage /></MainLayout>} />

        {/* Trang tài liệu miễn phí */}
        <Route path='/free-resources' element={<MainLayout><FreeDocumentPage /></MainLayout>} />
        <Route path='/free-resources/main-vocab' element={<MainLayout><MainVocabPage /></MainLayout>}  />
        <Route path='/free-resources/main-grammar' element={<MainLayout><MainGrammarPage /></MainLayout>} />
        <Route path='/free-resources/main-listening' element={<MainLayout><MainGrammarPage /></MainLayout>} />
        <Route path='/free-resources/main-reading' element={<MainLayout><MainGrammarPage /></MainLayout>} />
        <Route path='/free-resources/main-kanji' element={<MainLayout><MainGrammarPage /></MainLayout>} />

        {/* Trang tài liệu trả phí */}
        <Route path='/paid-resources' element={<MainLayout><PaidDocumentPage /></MainLayout>} />

        {/* Trang khóa học online */}
        <Route path='/online-courses' element={<MainLayout><OnlineCoursesPage /></MainLayout>} />

        {/* Trang blog */}
        <Route path='/blog' element={<MainLayout><BlogPage /></MainLayout>} />

        {/* Trang chat với nhân viên */}
        <Route path='/chat' element={<MainLayout><ChattingPage /></MainLayout>} />

        {/* Trang quản lý tài khoản */}
        <Route path='/account' element={<MainLayout><AccountPage /></MainLayout>} />

        <Route path='*' element='Home Page' />
      </Routes>
    </>
  )
}

export default App
