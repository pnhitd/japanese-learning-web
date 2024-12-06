import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ForgotPasswordOtpPage from './pages/FogotPasswordOtpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SearchingPage from "./pages/Searching/SearchingPage";
import SearchingVocab from "./pages/Searching/SearchingVocab";
import ChattingPage from "./pages/ChattingPage";
import HomePage from "./pages/HomePage";
import FreeResourcesPage from "./pages/FreeResources/FreeResourcesPage";
import PaidResourcesPage from "./pages/PaidResources/PaidResourcesPage";
import LearnedPaidResourcesPage from "./pages/PaidResources/LearnedPaidResourcesPage";
import FilterPaidResourcesPage from "./pages/PaidResources/FilterPaidResourcesPage";
import OnlineCoursesPage from "./pages/OnlineCoursesPage/OnlineCoursesPage";
import LearnedOnlineCoursesPage from "./pages/OnlineCoursesPage/LearnedOnlineCoursesPage";
import FilterOnlineCoursesPage from "./pages/OnlineCoursesPage/FilterOnlineCoursesPage";
import MainBlogPage from "./pages/Blogs/MainBlogPage";
import AccountPage from "./pages/AccountManagement/AccountPage";
import MainVocabPage from "./pages/FreeResources/MainVocabPage";
import MainGrammarPage from "./pages/FreeResources/MainGrammarPage";
import MainVocabPaidPage from "./pages/PaidResources/MainVocabPaidPage";
import MainGrammarPaidPage from "./pages/PaidResources/MainGrammarPaidPage";
import MainListeningPaidPage from "./pages/PaidResources/MainListeningPaidPage";
import MainKanjiPaidPage from "./pages/PaidResources/MainKanjiPaidPage";
import SettingsPage from "./pages/SettingsPage";
import LearnedResourcesPage from "./pages/FreeResources/LearnedResourcesPage";
import FilterFreeResourcesPage from "./pages/FreeResources/FilterFreeResourcesPage";
import SavedAccountPage from "./pages/AccountManagement/SavedAccountPage";
import MyResourcesPage from "./pages/AccountManagement/MyResources/MyResourcesPage";
import LearnedAccountPage from "./pages/AccountManagement/MyResources/LearnedResourcesPage";
import TodaySchedulerPage from "./pages/AccountManagement/MyScheduler/TodaySchedulerPage";
import MonthSchedulerPage from "./pages/AccountManagement/MyScheduler/MonthSchedulerPage";
import MyTestsAccountPage from "./pages/AccountManagement/MyTestsAccountPage";
import ArticlesBlogPage from "./pages/Blogs/ArticlesBlogPage";
import DetailArticlePage from "./pages/Blogs/DetailArticlePage";
import NoFooterLayout from "./layouts/NoFooterLayout";
import HomePageLayout from "./layouts/HomePageLayout";

function App() {
  // Tạo một mảng cho các route chính
  const mainRoutes = [
    { path: "/dashboard", element: <DashboardPage /> },
    { path: "/free-resources", element: <FreeResourcesPage /> },
    { path: "/paid-resources", element: <PaidResourcesPage /> },
    { path: "/online-courses", element: <OnlineCoursesPage /> },
    { path: "/blog", element: <MainBlogPage /> },
  ];

  // Tạo một mảng cho các route không có footer
  const noFooterRoutes = [
    { path: "/chat", element: <ChattingPage /> },
    { path: "/setting", element: <SettingsPage /> },
  ];

  // Tạo một mảng cho các route liên quan đến tài liệu miễn phí
  const freeResourcesRoutes = [
    { path: "learned", element: <LearnedResourcesPage /> },
    { path: "filter", element: <FilterFreeResourcesPage /> },
    { path: "main-vocab", element: <MainVocabPage /> },
    { path: "main-grammar", element: <MainGrammarPage /> },
    { path: "main-listening", element: <MainGrammarPage /> },
    { path: "main-reading", element: <MainGrammarPage /> },
    { path: "main-kanji", element: <MainGrammarPage /> },
  ];

  // Tạo một mảng cho các route liên quan đến tài liệu online
  const onlineResourcesRoutes = [
    { path: "learned", element: <LearnedOnlineCoursesPage /> },
    { path: "filter", element: <FilterOnlineCoursesPage /> },
  ];

  // Tạo một mảng cho các route liên quan đến tài liệu trả phí
  const paidResourcesRoutes = [
    { path: "learned", element: <LearnedPaidResourcesPage /> },
    { path: "filter", element: <FilterPaidResourcesPage /> },
    { path: "main-vocab-paid", element: <MainVocabPaidPage /> },
    { path: "main-grammar-paid", element: <MainGrammarPaidPage /> },
    { path: "main-listening-paid", element: <MainListeningPaidPage /> },
    //{ path: "main-reading-paid", element: <MainReadingPaidPage /> },
    //{ path: "main-kanji-paid", element: <MainKanjiPaidPage /> },
  ];

  // Tạo một mảng cho các route liên quan đến quản lý tài khoản
  const accountRoutes = [
    { path: "saved", element: <SavedAccountPage /> },
    { path: "scheduler", element: <TodaySchedulerPage /> },
    { path: "scheduler/month", element: <MonthSchedulerPage /> },
    { path: "my-resources", element: <MyResourcesPage /> },
    { path: "my-resources/learned", element: <LearnedAccountPage /> },
    { path: "my-tests", element: <MyTestsAccountPage /> },
  ];

  // Tạo một mảng cho các route liên quan đến blog
  const blogsRoutes = [
    { path: "articles", element: <ArticlesBlogPage /> },
    { path: "detail", element: <DetailArticlePage /> },
  ];

  // Tạo một mảng cho các route liên quan đến searching
  const searchingRoutes = [
    { path: "/search", element: <SearchingPage /> },
    { path: "vocab", element: <SearchingVocab /> },
  ];

  return (
    <Routes>
      {/* Trang đăng nhập và đăng ký, trang chính */}
      <Route
        path="/"
        element={
          <HomePageLayout>
            <HomePage />
          </HomePageLayout>
        }
      />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/forgot' element={<ForgotPasswordPage />} />
      <Route path='/forgotOTP' element={<ForgotPasswordOtpPage />} />
      <Route path='/resetPassword' element={<ResetPasswordPage />} />

      {/* Render các route chính */}
      {mainRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<MainLayout>{route.element}</MainLayout>}
        />
      ))}

      {/* Render các route không có footer */}
      {noFooterRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<NoFooterLayout>{route.element}</NoFooterLayout>}
        />
      ))}

      {/* Render các route con của Free Resources */}
      <Route path="/free-resources">
        {freeResourcesRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Route>

      {/* Render các route con của Paid Resources */}
      <Route path="/paid-resources">
        {paidResourcesRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Route>

      {/* Render các route con của Online Resources */}
      <Route path="/online-courses">
        {paidResourcesRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Route>

      {/* Render các route con của Account */}
      <Route path="/account">
        {accountRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
        <Route
          index
          element={
            <MainLayout>
              <AccountPage />
            </MainLayout>
          }
        />
      </Route>

      {/* Render các route con của Blogs */}
      <Route path="/blog">
        {blogsRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Route>

      {/* Render các route con của Searching */}
      <Route path="/search">
        {searchingRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Route>

      {/* Trang 404 */}
      <Route
        path="*"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
