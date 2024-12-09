import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdOutlineScreenSearchDesktop,
  MdOutlineMarkUnreadChatAlt,
} from "react-icons/md";
import {
  IoDocumentTextOutline,
  IoDocumentLockOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { RiBloggerLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";

const { Sider } = Layout;

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};

function getItem(label, key, icon, link = null, children = null) {
  return {
    key,
    icon,
    children,
    label: link ? <Link to={link}>{label}</Link> : label,
  };
}

const items = [
  getItem(
    "Bảng điều khiển",
    "/dashboard",
    <MdOutlineDashboard className="w-5 h-5" />,
    "/dashboard"
  ),
  getItem(
    "Tra cứu",
    "/search",
    <MdOutlineScreenSearchDesktop className="w-5 h-5" />,
    "/search"
  ),
  getItem(
    "Tài liệu miễn phí",
    "/free-resources",
    <IoDocumentTextOutline className="w-5 h-5" />,
    "/free-resources"
  ),
  getItem(
    "Tài liệu trả phí",
    "/paid-resources",
    <IoDocumentLockOutline className="w-5 h-5" />,
    "/paid-resources"
  ),
  getItem(
    "Khóa học online",
    "/online-courses",
    <AiOutlineTeam className="w-5 h-5" />,
    "/online-courses"
  ),
  getItem("Blog", "/blog", <RiBloggerLine className="w-5 h-5" />, "/blog"),
  getItem(
    "Quản lý tài khoản",
    "/account",
    <GoPerson className="w-5 h-5" />,
    "/account",
    [
      getItem("Thông tin tài khoản", "/account", <></>, "/account"),
      getItem("Lịch học", "/account/scheduler", <></>, "/account/scheduler"),
      getItem(
        "Tài liệu của bạn",
        "/account/my-resources",
        <></>,
        "/account/my-resources"
      ),
      getItem(
        "Các bài kiểm tra",
        "/account/my-tests",
        <></>,
        "/account/my-tests"
      ),
    ]
  ),
  getItem(
    "Chat với nhân viên",
    "/chat",
    <MdOutlineMarkUnreadChatAlt className="w-5 h-5" />,
    "/chat"
  ),
  getItem(
    "Cài đặt",
    "/setting",
    <IoSettingsOutline className="w-5 h-5" />,
    "/setting"
  ),
];

const LogoItem = () => {
  return (
    <div className="flex px-2 pb-4 mt-2">
      <img className="w-24 h-24" src={Logo} alt="" />
      <div className="text-center my-auto pl-2">
        <h1 className="text-[#F490AF] font-bold text-xl">SAKURA</h1>
        <p className="text-white text-base">JAPANESE</p>
      </div>
    </div>
  );
};

const NavbarDefault = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const getSelectedKeys = () => {
    const path = location.pathname;
    const match = items.find((item) => path.startsWith(item.key));
    return match ? [match.key] : [];
  };

  return (
    <Sider
      style={siderStyle}
      width={220}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <LogoItem />
      <Menu
        theme="dark"
        selectedKeys={getSelectedKeys()}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default NavbarDefault;
