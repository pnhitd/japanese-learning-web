import React, { useState } from "react";
import { Button, Input, Form, Select } from "antd";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineCreditCard,
  AiOutlineUser,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";

const PaidFinishPage = () => {
  return (
    <div className="container mx-auto my-6 px-8 mb-32">
      <div className="flex justify-between items-center mb-5 max-w-[30%] m-auto">
        <div className="flex flex-col items-center">
          <AiOutlineUser className="text-3xl text-[#5A81FA]" />
          <p className="text-sm font-semibold text-[#5A81FA]">Thông tin</p>
        </div>
        <div className="border-t-2 border-[#5A81FA] flex-1 mx-2"></div>
        <div className="flex flex-col items-center text-[#5A81FA]">
          <AiOutlineCreditCard className="text-3xl" />
          <p className="text-sm font-semibold text-[#5A81FA]">Thanh toán</p>
        </div>
        <div className="border-t-2 border-[#5A81FA] flex-1 mx-2"></div>
        <div className="flex flex-col items-center">
          <AiOutlineCheckCircle className="text-3xl text-[#5A81FA]" />
          <p className="text-sm font-semibold text-[#5A81FA]">Hoàn tất</p>
        </div>
      </div>

      <Link
        className="flex items-center mb-6"
        to="/cart-information/payment-methods"
      >
        <AiOutlineArrowLeft className="mr-2 text-[#5A81FA]" />
        <p className="font-semibold text-lg ml-2 text-[#5A81FA]">Quay lại</p>
      </Link>

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <FiCheckCircle className="text-[100px] text-[#00A91B]" />
        </div>
        <p className="text-2xl font-semibold text-[#00A91B] mt-6">
          Đơn hàng của bạn đã được thanh toán thành công!
        </p>
        <div>
          <p className="text-lg text-[#2B308B] mt-5">
            Mã đơn hàng: <b>IE104.2024</b>
          </p>
          <p className="text-lg text-[#2B308B] mt-2">
            Tổng số tiền: <b>200.000 VNĐ</b>
          </p>
          <p className="text-lg text-[#2B308B] mt-2">
            Thời gian: <b>11/12/2024_12:00</b>
          </p>
        </div>
        <p className="text-lg text-[#2B308B] mt-2">
          Cảm ơn bạn đã đăng ký khóa học. Sakura Japanese sẽ gửi mã kích hoạt
          qua email để bạn có thể vào học ngay.
        </p>
        <div className="flex mt-8 justify-end">
          <Link to="/dashboard">
            <Button
              key="buy"
              type="primary"
              className="text-lg font-semibold rounded-md bg-[#2B308B] p-6 mr-6"
            >
              Trở về trang chủ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaidFinishPage;
