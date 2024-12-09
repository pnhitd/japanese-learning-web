import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SearchingPage from "./pages/Searching/SearchingPage";
import SearchingVocab from "./pages/Searching/SearchingVocab";
import ChattingPage from "./pages/ChattingPage";
import HomePage from "./pages/HomePage";
import FreeResourcesPage from "./pages/FreeResources/FreeResourcesPage";
import PaidResourcesPage from "./pages/PaidResources/PaidResourcesPage";
import NotLearnedPaidResourcesPage from "./pages/PaidResources/NotLearnedPaidResourcesPage";
import CompletedPaidResourcesPage from "./pages/PaidResources/CompletedPaidResourcesPage";
import InProgressPaidResourcesPage from "./pages/PaidResources/InProgressPaidResourcesPage";
import FilterPaidResourcesPage from "./pages/PaidResources/FilterPaidResourcesPage";
import OnlineCoursesPage from "./pages/OnlineCoursesPage/OnlineCoursesPage";
import BoughtOnlineCoursesPage from "./pages/OnlineCoursesPage/BoughtOnlineCoursesPage";
import FilterOnlineCoursesPage from "./pages/OnlineCoursesPage/FilterOnlineCoursesPage";
import MainInforOnlineCousePage from "./pages/OnlineCoursesPage/MainInforOnlineCousePage";
import MainPathStudyOnlineCoursesPage from "./pages/OnlineCoursesPage/MainPathStudyOnlineCoursesPage";
import MainScheduleOnlineCoursesPage from "./pages/OnlineCoursesPage/MainScheduleOnlineCoursesPage";
import MainCommitOnlineCoursesPage from "./pages/OnlineCoursesPage/MainCommitOnlineCoursesPage";
import MainBlogPage from "./pages/Blogs/MainBlogPage";
import AccountPage from "./pages/AccountManagement/AccountPage";
import MainVocabPage from "./pages/FreeResources/MainVocabPage";
import VocabPage from "./pages/FreeResources/VocabPage";
import MainGrammarPage from "./pages/FreeResources/MainGrammarPage";
import MainVocabPaidPage from "./pages/PaidResources/MainVocabPaidPage";
import MainGrammarPaidPage from "./pages/PaidResources/MainGrammarPaidPage";
import MainListeningPaidPage from "./pages/PaidResources/MainListeningPaidPage";
import MainKanjiPaidPage from "./pages/PaidResources/MainKanjiPaidPage";
import AddToCartPage from "./pages/Payment/AddToCartPage";
import CartInformationPage from "./pages/Payment/CartInformationPage";
import PaymentMethods from "./pages/Payment/PaymentMethods";
import PaidFinishPage from "./pages/Payment/PaidFinishPage";
import SettingsPage from "./pages/SettingsPage";
import InProgressFreeResourcesPage from "./pages/FreeResources/InProgressFreeResourcesPage";
import CompletedFreeResourcesPage from "./pages/FreeResources/CompletedFreeResourcesPage";
import NotLearnedFreeResourcesPage from "./pages/FreeResources/NotLearnedFreeResourcesPage";
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
    { path: "in-progress", element: <InProgressFreeResourcesPage /> },
    { path: "completed", element: <CompletedFreeResourcesPage /> },
    { path: "not-learned", element: <NotLearnedFreeResourcesPage /> },
    { path: "filter", element: <FilterFreeResourcesPage /> },
    { path: "main-vocab", element: <MainVocabPage /> },
    { path: "main-grammar", element: <MainGrammarPage /> },
    { path: "main-listening", element: <MainGrammarPage /> },
    { path: "main-reading", element: <MainGrammarPage /> },
    { path: "main-kanji", element: <MainGrammarPage /> },
    { path: "vocab", element: <VocabPage /> },
  ];

  // Tạo một mảng cho các route liên quan đến tài liệu online
  const onlineResourcesRoutes = [
    { path: "bought", element: <BoughtOnlineCoursesPage /> },
    { path: "filter", element: <FilterOnlineCoursesPage /> },
    { path: "infor", element: <MainInforOnlineCousePage /> },
    { path: "study-path", element: <MainPathStudyOnlineCoursesPage /> },
    { path: "commit", element: <MainCommitOnlineCoursesPage /> },
    { path: "schedule", element: <MainScheduleOnlineCoursesPage /> },
  ];

  // Tạo một mảng cho các route liên quan đến tài liệu trả phí
  const paidResourcesRoutes = [
    { path: "not-learned", element: <NotLearnedPaidResourcesPage /> },
    { path: "completed", element: <CompletedPaidResourcesPage /> },
    { path: "in-progress", element: <InProgressPaidResourcesPage /> },
    { path: "filter", element: <FilterPaidResourcesPage /> },
    { path: "main-vocab-paid", element: <MainVocabPaidPage /> },
    { path: "main-grammar-paid", element: <MainGrammarPaidPage /> },
    { path: "main-listening-paid", element: <MainListeningPaidPage /> },
    // { path: "main-reading-paid", element: <MainReadingPaidPage /> },
    // { path: "main-kanji-paid", element: <MainKanjiPaidPage /> },
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

  // Tạo một mảng cho các route liên quan đến thanh toán đơn hàng
  const PaymentRoutes = [
    { path: "/cart-information", element: <CartInformationPage /> },
    { path: "add-cart", element: <AddToCartPage /> },
    { path: "payment-methods", element: <PaymentMethods /> },
    { path: "paid-finish", element: <PaidFinishPage /> },
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
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

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

      {/* Render các route con của Payment */}
      <Route path="/cart-information">
        {PaymentRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Route>

      {/* Render các route con của Online Resources */}
      <Route path="/online-courses">
        {onlineResourcesRoutes.map((route, index) => (
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
          <HomePageLayout>
            <HomePage />
          </HomePageLayout>
        }
      />
    </Routes>
  );
}

export default App;
