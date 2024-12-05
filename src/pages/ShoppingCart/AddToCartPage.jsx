import React from "react";
import Lessons from "../../components/Lessons";
import book from "../../assets/paidlessons/book.png";
import { Button, Flex } from "antd";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const AddToCartPage = () => {
  return (
    <div className="mx-10 my-6">
      <div className="flex">
        <div className="max-w-[70%]">
          <Link className="flex items-center mb-2" to="/paid-resources">
            <AiOutlineArrowLeft />
            <p className="font-semibold text-lg ml-2">Quay lại</p>
          </Link>
          <img className="float-left mr-4" src={book} alt="" />
          <div className="w-[60%] px-6">
            <h1 className="font-bold text-2xl">Thông tin tài liệu</h1>
            <div className="flex mt-4">
              <div className="ml-6">
                <h2 className="font-bold text-xl">Thông tin khóa học</h2>
                <p className="mt-2">
                  <b>Tên khóa học:</b> Ngữ pháp
                </p>
                <p className="mt-1">
                  <b>Học phí:</b> Miễn phí
                </p>

                <h2 className="font-bold text-xl mt-6">Thông tin học viên</h2>
                <p className="mt-2">
                  <b>Họ và tên:</b> Trần Nhật Trường
                </p>
                <p className="mt-1">
                  <b>Email:</b> truongnt@gmail.com
                </p>
                <p className="mt-1">
                  <b>Số điện thoại:</b> 0123456789
                </p>
              </div>
            </div>
            <Button type="primary" className="mt-6 w-full rounded-md">
              Mua ngay &rarr;
            </Button>
          </div>
        </div>
        <div className="ml-10 mt-10">
          <Lessons />
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
