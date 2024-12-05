import React from "react";
import { Layout } from "antd";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";

const HomePageLayout = () => {
  return (
    <Layout>
      <Navbar />
      <HomePage />
      <Footer />
    </Layout>
  );
};
export default HomePageLayout;
