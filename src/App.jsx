import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SearchingPage from './pages/SearchingPage';
import ChattingPage from './pages/ChattingPage';
import HomePage from './pages/HomePage';
import FreeDocumentPage from './pages/FreeResources/FreeResourcesPage';
import PaidDocumentPage from './pages/PaidResources/PaidResourcesPage';
import OnlineCoursesPage from './pages/OnlineCoursesPage';
import MainBlogPage from './pages/Blogs/MainBlogPage';
import AccountPage from './pages/AccountManagement/AccountPage';
import MainVocabPage from './pages/FreeResources/MainVocabPage';
import MainGrammarPage from './pages/FreeResources/MainGrammarPage';
import SettingsPage from './pages/SettingsPage';
import LearnedResourcesPage from './pages/FreeResources/LearnedResourcesPage';
import FilterFreeResourcesPage from './pages/FreeResources/FilterFreeResourcesPage';
import SavedAccountPage from './pages/AccountManagement/SavedAccountPage';
import MyResourcesPage from './pages/AccountManagement/MyResources/MyResourcesPage';
import LearnedAccountPage from './pages/AccountManagement/MyResources/LearnedResourcesPage';
import TodaySchedulerPage from './pages/AccountManagement/MyScheduler/TodaySchedulerPage';
import MonthSchedulerPage from './pages/AccountManagement/MyScheduler/MonthSchedulerPage';
import MyTestsAccountPage from './pages/AccountManagement/MyTestsAccountPage';
import ArticlesBlogPage from './pages/Blogs/ArticlesBlogPage';
import DetailArticlePage from './pages/Blogs/DetailArticlePage';

function App() {

  // Tạo một mảng cho các route chính
  const mainRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/dashboard', element: <DashboardPage /> },
    { path: '/search', element: <SearchingPage /> },
    { path: '/free-resources', element: <FreeDocumentPage /> },
    { path: '/paid-resources', element: <PaidDocumentPage /> },
    { path: '/online-courses', element: <OnlineCoursesPage /> },
    { path: '/blog', element: <MainBlogPage /> },
    { path: '/chat', element: <ChattingPage /> },
    { path: '/setting', element: <SettingsPage /> },
  ];

  // Tạo một mảng cho các route liên quan đến tài liệu miễn phí
  const freeResourcesRoutes = [
    { path: 'learned', element: <LearnedResourcesPage /> },
    { path: 'filter', element: <FilterFreeResourcesPage /> },
    { path: 'main-vocab', element: <MainVocabPage /> },
    { path: 'main-grammar', element: <MainGrammarPage /> },
    { path: 'main-listening', element: <MainGrammarPage /> },
    { path: 'main-reading', element: <MainGrammarPage /> },
    { path: 'main-kanji', element: <MainGrammarPage /> },
  ];

  // Tạo một mảng cho các route liên quan đến quản lý tài khoản
  const accountRoutes = [
    { path: 'saved', element: <SavedAccountPage /> },
    { path: 'scheduler', element: <TodaySchedulerPage /> },
    { path: 'scheduler/month', element: <MonthSchedulerPage /> },
    { path: 'my-resources', element: <MyResourcesPage /> },
    { path: 'my-resources/learned', element: <LearnedAccountPage /> },
    { path: 'my-tests', element: <MyTestsAccountPage /> },
  ];

  const blogsRoutes = [
    { path: 'articles', element: <ArticlesBlogPage /> },
    { path: 'detail', element: <DetailArticlePage /> }
  ]

  return (
    <Routes>

      {/* Trang đăng nhập và đăng ký */}
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />

      {/* Render các route chính */}
      {mainRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<MainLayout>{route.element}</MainLayout>}
        />
      ))}

      {/* Render các route con của Free Resources */}
      <Route path='/free-resources'>
        {freeResourcesRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Route>

      {/* Render các route con của Account */}
      <Route path='/account'>
        {accountRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
        <Route index element={<MainLayout><AccountPage /></MainLayout>} />
      </Route>

      {/* Render các route con của Blogs */}
      <Route path='/blog'>
        {blogsRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Route>

      {/* Trang 404 */}
      <Route path='*' element={<MainLayout><HomePage /></MainLayout>} />

    </Routes>
  );
}

export default App;