import React, { useState } from "react";
import { Button, Input, Form, Select } from "antd";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineCreditCard,
  AiOutlineUser,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import {
  RiBankFill,
  RiVisaLine,
} from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import momo from "../../assets/banks/momo.png";
import bidv from "../../assets/banks/bidv.png";
import acb from "../../assets/banks/acb.png";
import agri from "../../assets/banks/agri.png";
import hdbank from "../../assets/banks/hdbank.png";
import mb from "../../assets/banks/mb.png";
import sacom from "../../assets/banks/sacom.png";
import shb from "../../assets/banks/shb.png";
import techcom from "../../assets/banks/techcom.png";
import tp from "../../assets/banks/tp.png";
import viettin from "../../assets/banks/viettin.png";
import vpbank from "../../assets/banks/vpbank.png";
import vietcom from "../../assets/banks/vietcom.png";
import qrcode from "../../assets/banks/qrcode.png";

const { Option } = Select;

const PaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

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
        <div className="border-t-2 border-gray-300 flex-1 mx-2"></div>
        <div className="flex flex-col items-center">
          <AiOutlineCheckCircle className="text-3xl text-gray-400" />
          <p className="text-sm font-semibold text-gray-400">Hoàn tất</p>
        </div>
      </div>

      <Link className="flex items-center mb-6" to="/cart-information">
      <AiOutlineArrowLeft className="mr-2 text-[#5A81FA]" />
            <p className="font-semibold text-lg ml-2 text-[#5A81FA]">
              Quay lại
            </p>
      </Link>

      <div className="flex">
        <div className="w-[30%] bg-[#E8EBFF] p-6 rounded-xl shadow-md ml-20 mr-40 max-h-[450px]">
          <h2 className="text-2xl font-bold mb-5">Thông tin đơn hàng</h2>
          <div className="text-gray-600 text-sm mb-2">
            <p className="text-[#677489] font-base mb-3">Nhà cung cấp</p>
            <p className="text-xl text-[#000000]">SAKURA Japanese</p>
            <div className="border-t-2 border-[#D0CFCF] flex-1 mt-2"></div>
          </div>
          <div className="text-gray-600 text-sm mb-2">
            <p className="text-[#677489] font-base mb-3">Mã đơn hàng</p>
            <p className="text-xl text-[#000000]">IE106.2024</p>
            <div className="border-t-2 border-[#D0CFCF] flex-1 mt-2"></div>
          </div>
          <div className="text-gray-600 text-sm mb-2">
            <p className="text-[#677489] font-base mb-3">Mô tả đơn hàng</p>
            <ul className="list-disc ml-10">
              <li className="text-xl text-[#000000]">Khóa học JLPT N3</li>
              <li className="text-xl text-[#000000]">Khóa học JLPT N4</li>
            </ul>
          </div>
          <div className="mt-8 mb-2">
            <div className="border-t-2 border-dashed border-[#7C87AA] flex-1 mb-3"></div>
            <p className="text-[#677489] font-base mb-3">
              Tổng số tiền phải thanh toán
            </p>
            <p className="text-[#2B308B] text-2xl font-bold">1.100.000 VNĐ</p>
          </div>
        </div>

        <div className="w-[40%]">
          <h2 className="text-xl font-bold mb-4">Phương thức thanh toán</h2>
          <div className="flex mb-4">
            <button
              onClick={() => setPaymentMethod("creditCard")}
              className={`px-4 py-2 rounded-md items-center border ${
                paymentMethod === "creditCard"
                  ? "bg-white text-[#0570DE] border-2 border-[#0570DE] shadow-md"
                  : "bg-white text-black border-[#E0E0E0] shadow-md"
              }`}
            >
              <RiVisaLine className="mr-2 text-lg" /> Thẻ tín dụng
            </button>

            <button
              onClick={() => setPaymentMethod("bank")}
              className={`px-4 py-2 rounded-md items-center border ml-4 ${
                paymentMethod === "bank"
                  ? "bg-white text-[#0570DE] border-2 border-[#0570DE] shadow-md"
                  : "bg-white text-black border-[#E0E0E0] shadow-md"
              }`}
            >
              <RiBankFill className="mr-2" /> Ngân hàng
            </button>

            <button
              onClick={() => setPaymentMethod("momo")}
              className={`px-4 py-2 rounded-md items-center border ml-4 pr-10 ${
                paymentMethod === "momo"
                  ? "bg-white text-[#0570DE] border-2 border-[#0570DE] shadow-md"
                  : "bg-white text-black border-[#E0E0E0] shadow-md"
              }`}
            >
              <img src={momo} alt="Momo" className="mr-2 w-4 h-4" /> Momo
            </button>

            <button
              className={`px-2 py-2 rounded-md items-center border ml-4 ${
                paymentMethod === "other"
                  ? "bg-white text-[#0570DE] border-2 border-[#0570DE] shadow-md"
                  : "bg-white text-black border-[#E0E0E0] shadow-md"
              }`}
            >
              <HiDotsHorizontal className="mb-6 mx-1" /> 
            </button>
          </div>

          {paymentMethod === "creditCard" && (
            <div>
            <Form layout="vertical" className="text-[#4F5B76]">
              <Form.Item
                className="w-full text-blue-500"
                label={
                  <span className="text-[#4F5B76] font-semibold">Số thẻ</span>
                }
                style={{ marginBottom: 8 }}
              >
                <Input className="max-w-[400px]" placeholder="1234 1234 1234 1234" />
              </Form.Item>
              <div className="flex space-x-4">
                <Form.Item
                  label={
                    <span className="text-[#4F5B76] font-semibold">
                      Ngày hết hạn
                    </span>
                  }
                  
                  style={{ marginBottom: 8 }}
                >
                  <Input className="w-[192px]" placeholder="MM / YY" />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="text-[#4F5B76] font-semibold">CVC</span>
                  }
                  
                  style={{ marginBottom: 8 }}
                >
                  <Input className="w-[192px]" placeholder="CVC" />
                </Form.Item>
              </div>
              <div className="flex space-x-4">
                <Form.Item
                  label={
                    <span className="text-[#4F5B76] font-semibold">
                      Quốc gia
                    </span>
                  }
                  className="w-[192px]"
                >
                  <Select placeholder="Chọn quốc gia">
                    <Option value="vietnam">Việt Nam</Option>
                    <Option value="usa">Hoa Kỳ</Option>
                    <Option value="japan">Nhật Bản</Option>
                    <Option value="korea">Hàn Quốc</Option>
                    <Option value="australia">Úc</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label={
                    <span className="text-[#4F5B76] font-semibold">
                      Mã khu vực
                    </span>
                  }
                  className="w-[192px]"
                >
                  <Input placeholder="90210" />
                </Form.Item>
              </div>
            </Form>

            <div className="flex justify-end">
            <Link to="/cart-information/paid-finish">
              <Button
                key="buy"
                type="primary"
                className="text-base font-semibold rounded-md bg-[#2B308B] p-5 mt-1 mr-24"
              >
                Thanh toán &rarr;
              </Button>
            </Link>
          </div>
          </div>
          )}

          {paymentMethod === "bank" && (
            <div>
              <Form layout="vertical" className="text-[#4F5B76]">
                <Form.Item
                  label={
                    <span className="text-[#4F5B76] font-semibold">
                      Họ và tên chủ thẻ
                    </span>
                  }
                  style={{ marginBottom: 16 }}
                >
                  <Input className="w-[400px]" placeholder="Nguyễn Văn A" />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="text-[#4F5B76] font-semibold">Số thẻ</span>
                  }
                  style={{ marginBottom: 16 }}
                >
                  <Input className="w-[400px]" placeholder="1234 1234 1234 1234" />
                </Form.Item>
              </Form>
              <p className="text-[#4F5B76] font-semibold mb-3">Ngân hàng</p>
              <div className="grid grid-cols-3 gap-4 mb-6 max-w-[400px]">
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={vietcom} alt="Vietcombank" className="w-20 h-15" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={bidv} alt="BIDV" className="w-20 h-15" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={agri} alt="Agribank" className="w-40 h-16" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={acb} alt="ACB" className="w-25 h-10" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={techcom} alt="Techcombank" className="w-21 h-15" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={mb} alt="MB Bank" className="w-20 h-16" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={shb} alt="SHB" className="w-20 h-15" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={viettin} alt="Vietinbank" className="w-20 h-15" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={vpbank} alt="VPBank" className="w-20 h-16" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={tp} alt="TPBank" className="w-20 h-15" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={hdbank} alt="HDBank" className="w-20 h-15" />
                </button>
                <button className="border border-[#D0CFCF] rounded-lg flex justify-center items-center">
                  <img src={sacom} alt="Sacombank" className="w-20 h-16" />
                </button>
              </div>

              <div className="flex justify-end">
            <Link to="/cart-information/paid-finish">
              <Button
                key="buy"
                type="primary"
                className="text-base font-semibold rounded-md bg-[#2B308B] p-5 mt-1 mr-24"
              >
                Thanh toán &rarr;
              </Button>
            </Link>
          </div>

            </div>
          )}

          {paymentMethod === "momo" && (
            <div className="mb-[20px]">
              <p className="text-[#4F5B76] font-semibold mb-4 mt-6">Người nhận: SAKURA Japanese</p>
              <div className="bg-[#BECEFF] p-6 rounded-xl shadow-md max-w-[290px] ml-[60px]">
                <p className="text-[#2B308B] font-semibold ml-[25px] mt-[-10px] mb-[10px]">Quét mã QR để thanh toán</p>
                <img className="m-auto mb-[10px]" src={qrcode} />
                <p className="text-[#2B308B] text-center text-sm mb-[10px] ml-[-5px]">Sử dụng <span className="font-bold">App Momo</span> hoặc các ứng dụng hỗ trợ QR code để quét mã</p>
                <p className="text-[#2B308B] text-center text-xs ">Khó khăn khi thanh toán? <span className="font-bold text-[#5A81FA]">Xem hướng dẫn</span></p>
              </div>
            </div>
                )}

          <div className="flex items-center text-[#2B308B] mt-4">
            <FaAddressCard className="text-5xl mr-3" />
            <p className="text-sm text-blue-600">
              Sau khi thanh toán thành công, bạn sẽ được chuyển hướng đến giao
              diện xác nhận đã thanh toán và có thể bắt đầu khóa học mới của
              mình.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
