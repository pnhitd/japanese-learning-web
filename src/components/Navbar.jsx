import React from "react";
import { Layout, Menu } from "antd";
import logo from "../assets/logo-main.png";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const nav = [
  {
    key: "1",
    label: "Về Sakura",
    id: "about",
  },
  {
    key: "2",
    label: "Khóa học mới",
    id: "courses",
  },
  {
    key: "3",
    label: "Tài liệu",
    id: "documents",
  },
  {
    key: "4",
    label: "Blog",
    id: "blog",
  },
  {
    key: "5",
    label: "Phương châm",
    id: "purposes",
  },
  {
    key: "6",
    label: "Kiểm tra",
    id: "tests",
  },
];

const Navbar = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = nav.map((navItem) => ({
    key: navItem.key,
    label: (
      <span onClick={() => handleScrollTo(navItem.id)}>{navItem.label}</span>
    ),
  }));

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <img
        src={logo}
        alt="Logo Sakura"
        style={{
          width: 150,
          height: 50,
          marginRight: 16,
        }}
      />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      />
      <Flex gap="small" wrap>
        <Link to="/signup">
          <Button type="primary">Đăng ký</Button>
        </Link>
        <Link to="/login">
          <Button>Đăng nhập</Button>
        </Link>
      </Flex>
    </Header>
  );
};

export default Navbar;
