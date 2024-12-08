import React from "react";
import { Button, Input, Form } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  AiOutlineCheckCircle,
  AiOutlineCreditCard,
  AiOutlineUser,
  AiOutlineDelete,
} from "react-icons/ai";
import courseN4 from "../../assets/paidlessons/courseN4.png";
import courseN5 from "../../assets/paidlessons/courseN5.png";

const CartInformationPage = () => {
  return (
    <div className="container mx-auto my-6 px-8 mb-20">
      <div className="flex justify-between items-center mb-5 max-w-[30%] m-auto">
        <div className="flex flex-col items-center">
          <AiOutlineUser className="text-3xl text-[#5A81FA]" />
          <p className="text-sm font-semibold text-[#5A81FA]">Thông tin</p>
        </div>
        <div className="border-t-2 border-gray-300 flex-1 mx-2"></div>
        <div className="flex flex-col items-center">
          <AiOutlineCreditCard className="text-3xl text-gray-400" />
          <p className="text-sm font-semibold text-gray-400">Thanh toán</p>
        </div>
        <div className="border-t-2 border-gray-300 flex-1 mx-2"></div>
        <div className="flex flex-col items-center">
          <AiOutlineCheckCircle className="text-3xl text-gray-400" />
          <p className="text-sm font-semibold text-gray-400">Hoàn tất</p>
        </div>
      </div>

      <Link className="flex items-center mb-6" to="/paid-resources">
        <AiOutlineArrowLeft className="mr-2 text-[#5A81FA]" />
            <p className="font-semibold text-lg ml-2 text-[#5A81FA]">
              Quay lại
            </p>
      </Link>

      <div className="flex">
        <div className="w-[40%] flex-col mx-20">
          <div className="bg-[#F2F4FF] p-6 rounded-lg shadow-md mr-6">
            <h2 className="text-xl font-bold mb-6">Thông tin tài khoản</h2>
            <Form layout="vertical">
              <Form.Item className="font-semibold" label="Họ và tên">
                <Input className="border" placeholder="Nhập họ và tên" />
              </Form.Item>
              <Form.Item className="font-semibold" label="Email">
                <Input placeholder="Nhập email" />
              </Form.Item>
              <Form.Item className="font-semibold" label="Số điện thoại">
                <Input addonBefore="+84" placeholder="Nhập số điện thoại" />
              </Form.Item>
            </Form>
          </div>

          <div className="flex mt-8 justify-end">
            <Link to="/cart-information/payment-methods">
              <Button
                key="buy"
                type="primary"
                className="text-lg font-semibold rounded-md bg-[#2B308B] p-6 mr-6"
              >
                Thanh toán &rarr;
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-[40%]">
          <h2 className="text-xl font-bold mb-4">Các khóa học đã chọn</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <img
                  src={courseN5}
                  alt="Khóa học N5"
                  className="w-30 h-16 rounded-md mr-4"
                />
                <div>
                  <p className="font-semibold text-[#2B308B]">Khóa học N5</p>
                  <p className="text-sm text-gray-600">
                    Giảng viên: Đào Xuân Phương
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="font-semibold mr-4">500.000đ</p>
                <AiOutlineDelete className="text-2xl text-red-500 cursor-pointer hover:text-red-700" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <img
                  src={courseN4}
                  alt="Khóa học N4"
                  className="w-30 h-16 rounded-md mr-4"
                />
                <div>
                  <p className="font-semibold text-[#2B308B]">Khóa học N4</p>
                  <p className="text-sm text-gray-600">
                    Giảng viên: Trần Đỗ Phương Nhi
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="font-semibold mr-4">600.000đ</p>
                <AiOutlineDelete className="text-2xl text-red-500 cursor-pointer hover:text-red-700" />
              </div>
            </div>
          </div>
          <div className="flex mt-6 mb-4">
          <Input
            placeholder="Mã giảm giá"
            className="h-8 mr-4"
          />
          <Button
            type="default"
            className="w-[30%] bg-[#2B308B] text-white text-base h-8"
          >
            Áp dụng
          </Button>
          </div>

          <div className="mt-6 border-t pt-4 leading-7">
            <p className="text-xl font-semibold mb-5">Thông tin đơn hàng</p>
            <div className="flex justify-between">
              <p className="text-[#677489]">Tạm tính</p>
              <p>1.100.000đ</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#677489]">Giảm giá</p>
              <p>0đ</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#677489]">Thuế</p>
              <p>88.000đ</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#677489]">Mã đơn hàng</p>
              <p>IE106.2024</p>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <p className="font-bold text-lg">Tổng tiền</p>
              <p>1.188.000đ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInformationPage;
