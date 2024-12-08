import React from "react";
import Lessons from "../../components/Lessons";
import book from "../../assets/paidlessons/book.png";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const AddToCartPage = () => {
  return (
    <div className="mx-12 my-6">
      <div className="flex">
        <div className="max-w-[70%] mr-12">
          <Link className="flex items-center mb-6 text-blue-600" to="/paid-resources/main-vocab-paid">
            <AiOutlineArrowLeft className="mr-2" />
            <p className="font-semibold text-lg">Quay lại</p>
          </Link>

          <div className="flex">
            <div className="relative w-[55%] mr-10">
              <p className="text-4xl font-bold mb-5">Thông tin tài liệu</p>
              <img className="w-full h-auto rounded-lg shadow-lg" src={book} alt="Tài liệu" />
            </div>

            <div className="w-[45%] px-6 mt-12">
              <h2 className="font-bold text-2xl text-[#2B308B] mb-2">Thông tin khóa học</h2>
              <p className="text-lg mb-2">
                <p className="text-gray-500 font-semibold text-base">Tên khóa học:</p> 
                <p className="text-[#000000] font-semibold text-xl">Ngữ pháp</p>
              </p>
              <p className="text-lg mb-2">
                <p className="text-gray-500 font-semibold text-base">Học phí:</p> 
                <p className="text-[#000000] font-semibold text-xl">200.000 VNĐ</p>
              </p>

              <h2 className="font-bold text-2xl text-[#2B308B] mt-10 mb-2">Thông tin học viên</h2>
              <p className="text-lg mb-2">
                <p className="text-gray-500 font-semibold text-base">Họ và tên:</p> 
                <p className="text-[#000000] font-semibold text-xl">Trần Nhật Trường</p>
              </p>
              <p className="text-lg mb-2">
                <p className="text-gray-500 font-semibold text-base">Email:</p> 
                <p className="text-[#000000] font-semibold text-xl">truongnt@gmail.com</p>
              </p>
              <p className="text-lg mb-2">
                <p className="text-gray-500 font-semibold text-base">Số điện thoại:</p> 
                <p className="text-[#000000] font-semibold text-xl">0123456789</p>
              </p>
{/* //text-base font-semibold rounded-md bg-[#2B308B] p-5 */}
              <div className="flex mt-8">
                <Link to="/cart-information">
                  <Button
                    key="buy"
                    type="primary"
                    className="text-base font-semibold rounded-md bg-[#2B308B] p-5"
                  >
                    Mua ngay &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-10 mt-14">
          <p className="font-bold text-2xl text-[#2B308B] mt-10 mb-2">Đề xuất khác</p>
          <Lessons />
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
