import React from "react";
import { Layout, Menu } from "antd";
import logo from "../assets/logo-main.png";
import { Button, Flex } from "antd";

const { Header } = Layout;

const nav = [
  {
    key: "1",
    label: "Về Sakura",
  },
  {
    key: "2",
    label: "Khóa học mới",
  },
  {
    key: "3",
    label: "Tài liệu",
  },
  {
    key: "4",
    label: "Blog",
  },
  {
    key: "5",
    label: "Phương châm",
  },
  {
    key: "6",
    label: "Kiểm tra",
  },
];

const items = nav.map((navItem) => ({
  key: navItem.key,
  label: navItem.label,
}));

const Navbar = () => {
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
        <Button type="primary">Đăng ký</Button>
        <Button>Đăng nhập</Button>
      </Flex>
    </Header>
  );
};

export default Navbar;
